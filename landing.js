// The home page's map story (index.html, en/index.html): the map of Baixo Sabor stays pinned (.stage)
// while the steps scroll past, and each step changes it: today's photo, the 2012 photo wiping in, the
// depth drawing in, the depth at four levels, a tapped point. Only opacity, transform and clip-path
// change; the scroll stays the browser's own. Without this script, or with reduced motion, site.css
// shows every step as still pictures instead.
(function () {
  "use strict";
  var story = document.getElementById("story");
  if (!story || matchMedia("(prefers-reduced-motion: reduce)").matches || !CSS.supports("position", "sticky")) return;
  document.documentElement.classList.add("story-on");

  var stage = story.querySelector(".stage");
  var steps = story.querySelectorAll(".step");
  var notes = story.querySelectorAll(".step .note");
  var get = function (s) { return stage.querySelector(s); };
  var d100 = get(".d100"), d85 = get(".d85"), d50 = get(".d50"), d25 = get(".d25"), y2012 = get(".y2012");
  var seam = get(".seam"), tap = get(".tap"), gauge = get(".gauge"), value = gauge.querySelector("b");

  function ramp(t, a, b) { return t <= a ? 0 : t >= b ? 1 : (t - a) / (b - a); }
  // Reservoir fill (%) along the story: 100, 85, 50 and 25 in step 4, back to 85 for the tap in step 5.
  var LEVEL = [[3.15, 100], [3.25, 85], [3.4, 85], [3.5, 50], [3.65, 50], [3.75, 25], [4.05, 25], [4.3, 85]];
  function level(t) {
    if (t <= LEVEL[0][0]) return LEVEL[0][1];
    for (var i = 1; i < LEVEL.length; i++) {
      if (t <= LEVEL[i][0]) return LEVEL[i - 1][1] + (LEVEL[i][1] - LEVEL[i - 1][1]) * ramp(t, LEVEL[i - 1][0], LEVEL[i][0]);
    }
    return LEVEL[LEVEL.length - 1][1];
  }

  var shown = "", queued = false;
  function draw() {
    queued = false;
    // t: 0 at the top; step k (1 to 5) takes t from k - 1 to k while it crosses the bottom of the screen.
    var vh = window.innerHeight, t = 0;
    for (var i = 0; i < steps.length; i++) {
      var r = steps[i].getBoundingClientRect();
      t += Math.min(1, Math.max(0, (vh - r.top) / r.height));
      // A step's card fades as it leaves, so two cards are never read at once.
      notes[i].style.opacity = 1 - ramp(vh - r.bottom, 0, vh * 0.25);
    }
    // The pictures after the first screen load once the reader starts scrolling.
    if (t > 0 && !stage.classList.contains("live")) stage.classList.add("live");

    // 1: the depth fades, just water. 3: it draws in again from the top. 4: the levels.
    d100.style.opacity = t < 1 ? 1 - ramp(t, 0.05, 0.35) : t < 2 ? 0 : 1 - ramp(t, 3.15, 3.25);
    d100.style.clipPath = t < 2 ? "" : "inset(0 0 " + (100 * (1 - ramp(t, 2.1, 2.6))).toFixed(2) + "% 0)";
    d85.style.opacity = ramp(t, 3.15, 3.25) * (1 - ramp(t, 3.4, 3.5)) + ramp(t, 4.05, 4.3);
    d50.style.opacity = ramp(t, 3.4, 3.5) * (1 - ramp(t, 3.65, 3.75));
    d25.style.opacity = ramp(t, 3.65, 3.75) * (1 - ramp(t, 4.05, 4.3));
    // 2: the 2012 photo wipes in from the left behind a seam; 5: today's photo again.
    var k = ramp(t, 1.1, 1.6);
    y2012.style.clipPath = "inset(0 " + (100 * (1 - k)).toFixed(2) + "% 0 0)";
    y2012.style.opacity = 1 - ramp(t, 4.05, 4.3);
    seam.style.setProperty("--k", k.toFixed(4));
    seam.style.opacity = ramp(t, 1.05, 1.12) * (1 - ramp(t, 1.6, 1.7));
    // 4 and 5: the level indicator; 5: the tapped point.
    gauge.style.opacity = ramp(t, 2.95, 3.1);
    var pct = level(t), text = Math.round(pct) + " %";
    gauge.style.setProperty("--fill", (pct / 100).toFixed(3));
    if (text !== shown) { value.textContent = text; shown = text; }
    var p = ramp(t, 4.3, 4.45);
    tap.style.opacity = p;
    tap.style.transform = "translateY(" + ((1 - p) * 8).toFixed(1) + "px)";
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(draw); } }
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  draw();
})();
