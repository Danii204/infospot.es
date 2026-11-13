---
permalink: /changelog/
title: What's new in InfoSpot
---

# What's new in InfoSpot

Los cambios de cada versión, en inglés. The changes in each version of the app.

## 0.10.0-beta.35 - 2026-11-12

- Website and app: a shared spot's link now carries the spot after `#` (`infospot.es/spot.html#lat=...`), which browsers never send to a server; links shared before still open. The spot page sends nothing and passes no address to other sites.
- Website and app: licence notices in the form each licence asks for. IGN products read "PNOA máxima actualidad CC-BY 4.0 scne.es", "PNOA <year> CC-BY 4.0 scne.es", "Orto-AMS 1956-1957 CC-BY 4.0 ejercito.defensa.gob.es", "IGN Base CC-BY 4.0 scne.es" and so on; the DGT's photos say CC BY 4.0 and modified; the estimated depth layer shows "Obra derivada de MDT05-cob1 2008-2015 CC-BY 4.0 scne.es" (and PNOA 2011 for Belesar), the Copernicus Sentinel and Landsat notices, and, for Baixo Sabor, the Copernicus WorldDEM-30 notice. Credits show in one line when the map opens and fold to the "i" when the map is moved. The credits list the Terrain Tiles sources and the ODbL notice for the reservoir outlines file, now offered at `infospot.es/app/data/reservoir_outlines.json`.
- Privacy policies: rewritten to follow GDPR article 13 (controller, purposes and legal bases, recipients and transfers, retention, rights, complaint to the AEPD, children, automated decisions), with every host the app and the website contact and every item the browser keeps. The wrong statement about the hash key is gone.
- Terms of use: a legal notice section (linked from the footers), corrections to what was no longer true (the estimated depth has been checked against measured depths at two points of Belesar) and to the database-right wording, the licences list, and a consumer-law clause.
- App and website: the "estimated depth not yet checked against measured depths" notices now say it has been checked at two points of Belesar only.
- Website, home page (https://infospot.es and /en/): the phone pictures at the top are now a map of Baixo Sabor with its depth colours and contour lines, and a scroll story below it: the map stays in place while today's photo, the 2012 photo of the valley before the water, the depth drawing in, the depth at 100, 85, 50 and 25 % and a tapped point follow one another. Then shorter sections for the levels, the weather, spots and tracks, web and Android, and privacy. Without JavaScript, or with reduced motion, the same story shows as still pictures. The test copy is published at /beta/home/ by `tools/web_beta.sh`.
- App and website: reservoir levels now come only from official sources. The weekly level of every Spanish reservoir comes from the Ministry for the Ecological Transition's Hydrological Bulletin (dated Tuesday, as in the history, where embalses.net dated it Monday). A daily reading comes from the river basin authority where it publishes one: 27 reservoirs of the Miño-Sil, Duero, Guadalquivir, Guadalete-Barbate (Junta de Andalucía) and Sau (Catalan Water Agency). Baixo Sabor keeps the APA weekly bulletin. Levels are updated twice a day instead of every six hours.
- App and website: the 26 reservoirs of the Tajo, Guadiana, Júcar and Ebro basins no longer have a reading more recent than the weekly bulletin, because their basin authorities do not publish one that can be reused; they show the weekly figure with its date, and their list entry no longer says "real time". The others say "daily reading".
- App: the button at the top of a reservoir opens its official source (the basin's SAIH or the Ministry's bulletin) instead of embalses.net, and the credits list the new sources.
- App: the reservoir screen says whether the figure is the daily reading or the weekly bulletin next to its date. With no connection, pull to refresh stops at once and says "No connection: showing the readings saved on ..."; the sync runs when the network returns.
- App: the map credits show in full, wrapped in small type beside the map buttons and above an open reservoir panel, and list only the layers in view (no Portuguese line in Spain, no PNOA line under an opaque IGN map); Settings -> Legal keeps the full list.
- Website: a "What's new" page at infospot.es/changelog/, which About links to.
- Levels: the published file no longer carries readings taken from embalses.net (daily series of reservoirs without an official daily source, and old readings of the others): the app showed them as fresh readings. A reservoir without the real-time flag ignores real-time readings in the app.
- App: the phone no longer reads embalses.net or the APA itself when the published levels file cannot be downloaded; it keeps showing the stored readings with their dates and tries again later.

## 0.10.0-beta.34 - 2026-11-11

- App: new estimated depth maps for 20 reservoirs, in the depth-maps-8 set (phones fetch them again): Alange, Arenós, Bornos, Contreras, El Atazar, El Burguillo, El Pintado, Entrepeñas, García de Sola, Guadalmena, Iznájar, Jándula, La Serena, Orellana, Puente Nuevo, San Juan, San Rafael de Navallana, Sierra Brava, Valmayor and Zújar. They are rebuilt with Belesar's methods (where it helped, Landsat images from before 2016 of the reservoir lower than Sentinel-2 ever saw it) and match the shorelines of satellite images left out of the build better than the previous maps. In El Atazar, Valmayor, García de Sola and San Rafael de Navallana the map now shows water at low levels where it showed almost none.
- App: in every reservoir except Belesar and Baixo Sabor, the bed never seen dry showed its depth as if it were measured. A tap there now reads "about 34 m deep (estimated)", the depth at the top of the map and when marking a spot say "(est.)" or "(estimated)", and a dashed line marks where that part starts, as in Belesar. The depth lines and colours go on below it. A depth report sent from the app says when the estimate was of that part.
- App: the depth layer of a large reservoir (La Serena, Almendra, Valdecañas) could take minutes to draw and close the app for lack of memory, above all when the level was changed or Layers opened while it was drawing. It now draws in a few seconds with a fraction of the memory, and switching the layer off, changing the level or moving to another reservoir stops the drawing at once.
- App: while the depth lines are drawn, the layers panel keeps the depth switch and level, and says it is drawing.
- App: when a depth map cannot be downloaded (no connection), the layers panel says so under the reservoir's level, where the depth is switched on, instead of showing nothing.
- App: changing the level of the depth layer keeps the old lines and colours on the map until the new ones are drawn, instead of an empty map for a few seconds. Turning "Auto" off at the same level no longer redraws it, and the "drawing" bar no longer pushes the level slider while it is being moved.
- App: a spot link opened while the app was open made a second copy of the app with a blank map; it now opens the spot in the app already open. The same goes for the track recording and weather notifications.
- App: a language change could move the map back to where it was when the app was opened; it now stays where it was.
- App: test builds (with "-dev" in their version) were offered the previous beta as an update.
- App: after a level change, an open depth readout kept the depth of the old level; it now shows the depth at the new one.
- App: depth lines could cross each other where they run very close: a depth line and the dashed line of the never-seen-dry part (an X in Contreras at 25 %), and neighbouring lines on steep estimated slopes. They no longer cross.
- App: in the depth report, the day's format is under the field (it wrapped onto the field's border in Spanish at large font sizes), and a measured depth out of range says why it cannot be sent.
- App: near the dam of Contreras, Tous, Alarcón, Giribaile, Guadalcacín, Bornos, Sierra Brava and Guadalhorce-Guadalteba the estimated depth went deeper than the dam allows (in Contreras and Tous by more than 30 m). It now stops at the old river bed under the dam.

## 0.10.0-beta.33 - 2026-11-10

- Depth server: a spending guard. Every 5 minutes it estimates the month's bill for the map storage and, at $5, blocks `mapas.infospot.es` until the next month; the app and the website then take the photos from the DGT.
- App: a new estimated depth map of Belesar, in the depth-maps-7 set (phones fetch it again). The constant 20 m correction is gone: the lowest shore comes from the IGN's 2011 orthophoto, taken with the reservoir almost empty, Landsat's water is read with a rule tuned against Sentinel-2, and the bed between distant shorelines is spread by distance. Near the dam it reads 69 m at full level (70 m measured); much of the deep bed is shallower than before. The website still shows the previous map until its depth tiles are rebuilt.
- App and website map: the depth tiles and the Portuguese orthophoto copy come from `mapas.infospot.es` (Cloudflare R2 behind its cache) instead of the depth server, so busy days no longer use up its daily limit and leave blank squares (decision 0016).
- Website map: blank orthophoto tiles and blurry depth lines after a long session. The depth server no longer has a daily quota for depth tiles (only for depth points), and the orthophoto copies have their own rate limiter, so refused depth tiles no longer blank the photos.

## 0.10.0-beta.32 - 2026-11-08

- App and website map: a long press on the map (a right click on a computer) opens a new spot at that point, without the Mark button; Mark with its crosshair stays for precise points.

## 0.10.0-beta.31 - 2026-11-08

- Website, a reservoir's page: a wind and rain map around it for the next 48 hours, below the forecast, with a bar to choose the hour, wind arrows spaced for the zoom and a full-screen button; from the DWD's ICON-EU model (CC BY 4.0), made by Danii204/infospot-weather.
- App and website, measuring: a tap on the map adds the tapped point; the cross and Add point stay for precise points.
- App and website: the orthophotos of Portugal (Baixo Sabor), the current one and every year from 1995, load from InfoSpot's own copy on the depth server instead of the DGT's slow server (the current one 1 km around the water, zoom 19 within 250 m; the years 250 m around), and are sharp from zoom 12 instead of 14, where the blurry Sentinel-2 image showed before.
- Website map: a press outside the layers panel closes it, as its X does.
- App, measuring: the Add point label no longer wraps and gets cut; Close is now the X by the title.
- Website map: your position is an arrow along your course once you move, as in the app, and the speed and course are steadier: worked out over the last six seconds of readings (the median of the speeds the browser gives, or else the way made), none from positions worse than 20 m. Slow speeds are shown as they are, with no course under about 2 km/h.

## 0.10.0-beta.30 - 2026-11-07

- App: while Home, Reservoirs and Spots load, grey cards in the shape of the ones to come pulse gently instead of a spinner.
- App: the reservoir panel on the map no longer has the favourite star (it stays on the reservoir's page and in the list).
- App: some reservoirs (Baixo Sabor and others where the water runs to the edge of the depth data) had depth lines left open, so a colour band was missing; every line now closes.

## 0.10.0-beta.29 - 2026-11-07

- App: the reservoir panel on the map has an X to close it, besides the bar at its top and a tap on the map.
- App: up close the depth colours still did not meet the depth lines (the colour was an image, stretched as you zoom in, under sharp lines). The colour is now drawn as bands between consecutive lines, from the very same lines, so it meets each of them exactly at any zoom, as on the website.

## 0.10.0-beta.28 - 2026-11-07

- App: Settings → Map GPS has three modes: off, automatic (off while the phone saves battery) and always on. It replaces the GPS button on the map.
- App: Settings → Downloads lists every offline map with what it takes, to delete one or all.
- App: in Layers, the estimated depth has its opacity slider (colours and lines together), as on the website.
- App: the Spots tab holds the recorded tracks (show on the map, rename, export, delete) and GPX import and export, which were in the map menu.
- App: a reservoir's page lists its layers in one list, the current map and every photo year: the star on the left, the download of the whole reservoir on the right and, once downloaded, its quality, size and a delete button. Any year can be downloaded, not only the oldest. Downloading again in another quality replaces the earlier download once the new one is complete.
- App: the map loses the ⋮ menu and the GPS button. Downloading the visible area is gone: the whole-reservoir downloads cover it.
- App: the wind and rain map shows in its card, as on the website; tapping it or the expand button opens it full screen.
- App: opacity sliders move in steps of 5 %, as the website's.
- App: up close, the depth colours spilled past the shore line. The colour image is now up to three times finer (3.3 m per pixel on Belesar) and fades out just inside the 0 m line.

## 0.10.0-beta.27 - 2026-11-05

- App: downloading a historical year from Layers asks for the quality too, as a reservoir's page.
- App: downloads failed with timeouts and HTTP 500 or 502 from the IGN and DGT servers. The app now asks each map server for 6 tiles at a time instead of 20 and waits up to 60 s, and a server error shows as "the server does not answer, the download goes on" (MapLibre retries it) instead of a failure.

## 0.10.0-beta.26 - 2026-11-05

- The home page says the website works without coverage.
- Search: each reservoir's page says how much water it holds, how it changed in a week, a year ago and against the mean of the ten years before, and links the other reservoirs of its region; a page per region lists its reservoirs' levels; the titles name the level and reservoirs are also called "pantano"; the sitemap has each page's date; the home page links the reservoir list.
- Website: the depth drawn as a nautical chart: pale blue getting lighter with depth, grey lines (every 2 m close up), darker every 10 m, a number on each line, the shore in dark and the bed never seen dry dotted, up to zoom 16.
- Website: the depth of Baixo Sabor (Portugal), from terrain measured before it was filled (Copernicus GLO-30): 2809 ha and 1080 hm3 at full level against the 2819 ha and 1095 hm3 published.
- App, as the website: the depth drawn as a nautical chart (pale blue getting lighter with depth, grey lines every 2 m close up, darker every 10 m, a number on each line, the shore in dark).
- App: the estimated depth of Baixo Sabor (Portugal), in the new depth-maps-6 set.
- App, a reservoir's forecast: a wind and rain map of the next 48 hours, full screen, with a bar to choose the hour, the same as the website's (DWD ICON-EU, CC BY 4.0) over OpenFreeMap and relief.
- App, map: a ruler. The cross in the middle marks each point; the line and the length run on to the cross as the map moves, with undo and clear.
- App, a reservoir's download: choose the quality first (basic, medium, high or maximum), each with its metres per pixel and size.
- App: historical photos are drawn and downloaded one zoom deeper (zoom 18), where they still have detail.
- App, map: Back now shows "Press back again to leave" and a second press within 2 s goes back, instead of doing nothing.
- App: Go to a spot (the straight line from your position to a spot and its Go button); the spot's dialog now only has Close.
- App: the size of a download was about four times too small (MapLibre fetches the 256 px tiles one zoom deeper than the map's), and the orthophoto over Portugal weighs more per tile; a Belesar download now takes what it says (10.0 MB said, 10.9 MB taken).
- Google search showed infospot.es without its logo: the website now has a 48 px favicon.ico and a 192 px icon.

## 0.10.0-beta.25 - 2026-10-26

- The website's forecast draws the weather as the app does (sun, clouds, fog, drizzle, rain, snow, storm): now, each hour, each day, on the home page's favourites and on the map's reservoir card.
- The reservoir pages and the sitemap are rewritten every six hours by the levels job.
- A page per reservoir on the website (`/embalse/<slug>/`: latest level, facts, historical photo years, depth map, links into the web app) and their list at `/embalses/`, generated on publishing by `web/app/scripts/reservoir-pages.mjs` together with the sitemap.
- The website's home page in Spanish at `/` and in English at `/en/`, as static pages search engines read (before, the Spanish text was set by a script over the English), with hreflang links, structured data (schema.org), share previews (Open Graph), robots.txt and a sitemap; the web app has a Spanish title and description.
- The private statistics page, redone: activity per hour or day and a weekday-by-hour map in Madrid time, the reservoirs looked at (page, map card, map centre, depth), each feature's trend, the welcome tour's funnel, visit length and bounce, filters by country, device, language and reservoir, a "now" that refreshes every 30 s, a CSV export, and Cloudflare Web Analytics (visits, pages, referrers, load times) and the depth server's usage on the same page.
- The web app loads the map (MapLibre) apart, after the first page is on screen or when the map is opened: the first download goes from about 320 kB to 22 kB compressed.
- The depth server limits each visitor to 400 depth pictures and points a minute and 2,000 a day, counted in one Durable Object per visitor: the per-location rate limiter never refused anyone, so a whole copy took about two hours from one address.
- The website counts a reservoir when its name is tapped on the map or the map is centred on it, not only when its page opens; the depth event names the reservoir; the tour reports each step.
- The website's own visits can be left out with `?nostats`, and events from local builds are no longer stored.
- The website's map was black on the next visit after switching off every base map; the orthophoto now comes back.
- The orthophoto of Spanish reservoirs near Portugal (Alcántara, Alange, Almendra) was covered by the coarse satellite overview meant for Portugal: the Portuguese layers now cover only the Baixo Sabor, in the app and on the website.
- The website's usage events were lost in some browsers (sent with sendBeacon); they are now sent with a keepalive request.

## 0.10.0-beta.24 - 2026-10-25

- The website's own usage statistics: who is on it now, daily visitors, the screens and reservoirs opened and the features used, by country, device and language. Anonymous events go to the depth server, are stored in the EU for 90 days, and show on a private page.
- The position on the map is a small arrow, without the white disc around it.

## 0.10.0-beta.23 - 2026-10-22

- A welcome tour on the first start of the app and of the website: what InfoSpot does, in four steps (reservoirs, map and depth, spots and tracks). It shows once and can be skipped.
- On the website's map, the location and zoom buttons sit under Layers, and the bottom keeps only the credits button and the record-track and mark-spot buttons, as in the app. The credits start closed.

## 0.10.0-beta.22 - 2026-10-21

- On the website's map, the estimated depth and the historical photos each have an opacity slider in Layers; the browser remembers the setting.
- The website's Layers work as the app's: several layers at once (base maps and historical photos, the oldest on top), each with its opacity, base maps as picture cards, the depth level with an Auto switch, and the photo years as chips.
- A language button (English or Spanish) on the website and its home page; the browser remembers it.
- On the website, each of the next 7 days opens to its weather hour by hour.
- New icon and logo: isobaths filled with the depth colours and a red map pin, in the app (with a themed icon), on Google Play and on the website.
- The website looks like the app: its colours, its font (Space Grotesk), Material 3 switches, sliders, chips and fields, square map buttons, and the reservoirs' name pills on their dams (only the name, as in the app). The website and its home page present InfoSpot as newly launched; only the estimated depth keeps a "Beta" tag.
- On the website's map, the map credits button moved to the bottom-left, above the scale.
- The website's map loads its sharp tiles much faster (all at once instead of 16 at a time).
- The website and its home page use the app's water palette (light and dark).

## 0.10.0-beta.21 - 2026-10-21

- Website version at https://infospot.es/app/, for phones and computers: Home (weather where you are, sun and moon, favourites), the map with the base maps, historical photos, the estimated depth, your position with speed, heading and depth, spots (with type, weight and photo) and tracks, the reservoir list, each reservoir's chart, weather and sun and moon, GPX export and import, and the report of a real depth. Spots and tracks stay in the browser.
- New home page at https://infospot.es with the beta notice, what InfoSpot does and what the web and the Android app each offer.
- Terms of use (TERMS.md), which protect the estimated depth maps from extraction.
- Depth server (Cloudflare Workers): the website receives depth pictures and single points only, limited per visitor; the maps carry identifying marks.
- Report the real depth: tap the water with the depth layer on and, if you measured the depth there, send it by email to soporte@infospot.es (with the point, the day and the app's estimate) to help correct the maps.
- Reservoir levels come from one file published every six hours at infospot.es, read once for everybody from embalses.net and the APA; the app reads those sites itself only when the file is missing or out of date.

## 0.10.0-beta.20 - 2026-10-20

- Help → Report a problem addresses the log to soporte@infospot.es, the new support address.
- Website https://infospot.es, with the privacy policy; shared spots open on it.

## 0.10.0-beta.19 - 2026-10-16

- Estimated depth is deeper where it was too shallow: the part of the bed the satellites never saw dry is fitted to the height of each dam (from Wikipedia and the Spanish dam inventory), deepest next to the dam and shallower towards the tails. San Rafael de Navallana, for example, goes from 40 m to 48 m at full level. García de Sola gets its depth map.
- Downloading an area while the map server does not answer now says the download carries on by itself when the server is back, instead of showing a technical error.

## 0.10.0-beta.18 - 2026-10-15

- Outlines for García de Sola and Arenós (OpenStreetMap names them "Embalse Garcia Sola" and "Embalse de Arenoso"): whole-reservoir download, historical photos on the reservoir and the weather at its centre. Estimated depth for Arenós.
- San Rafael de Navallana (Córdoba): level, history since 1988, outline, dam, historical photos and estimated depth. Database version 11 adds it.

## 0.10.0-beta.17 - 2026-10-15

- Settings in sections: Appearance, Map, Alerts, Data and privacy, and InfoSpot (Updates with what's new, Help and feedback with Report a problem, Legal, About). Backup, Storage and Battery moved from About to Data and privacy.
- MapLibre 13.7.1 and AboutLibraries 15.3.0.
- InfoSpot is marked as a beta on Home and in About; the depth layer says it is not yet checked against measured depths.
- Depth maps are no longer inside the app (about 10 MB smaller): each one is downloaded the first time its reservoir's depth is shown, or with the reservoir's offline download, and kept.
- The map layers panel opens fully at a fixed height: dragging it up no longer fights with its list and loses taps.

## 0.10.0-beta.16 - 2026-10-15

- Portugal on the map: below zoom 14, where the DGT serves no orthophoto, and while its slow server sends the tiles close up, it showed a coarse, pixelated image; it now shows Sentinel-2 cloudless (EOX, CC BY 4.0) there.

## 0.10.0-beta.15 - 2026-10-15

- Reservoirs and Weather are one tab: each reservoir's page has its level, its full forecast (now, hours, wind, pressure, days, sun and moon) and its maps. The weather where you are opens from the weather card on Home; alerts and the map's See forecast open the reservoir's page.
- The bottom bar is Home, Map, Spots and Reservoirs.
- The automatic shoal flags of the depth layer and the Shoal warning setting: only Danger spots are red flags now.

## 0.10.0-beta.14 - 2026-10-15

- Guadalmena and Yeguas (Andalusia): level, history since 1988, outline, dam, historical photos and estimated depth. Database version 10 adds them.
- Danger flags: the depth layer flags shoals (water under 1.5 m away from the shore, rising from deeper water; the depth can be changed in Settings > Map > Shoal warning) with their depth, and Danger spots are drawn as red flags.

## 0.10.0-beta.13 - 2026-10-15

- Depth colours are a continuous gradient from light to dark blue instead of steps, more visible (per-pixel transparency instead of the fixed 30 % layer opacity), from pale cyan to navy and scaled to 100 m so deep reservoirs keep a visible gradient.
- The shore is a thin smooth red line, also on steep banks, and the last 2 m of water turn opaque towards it, so the map no longer shows through at the edge. The red fade inside the water is gone.
- Isobaths, colours and shore come from one depth field smoothed over about 40 m, so the lines are smooth curves without spikes and the shore closes where the water reaches the edge of the data.

## 0.10.0-beta.12 - 2026-10-15

- Estimated depth for Entrepeñas.
- The estimated depth colours and the isobaths are now one map layer with a single switch: colours at 30 % opacity and lines at full opacity, without sliders.
- The shore is shown by the colours instead of a cyan line: the last 5 m fade from blue to red, solid red in the last metre. Every colour change below 5 m falls on an isobath.
- Smoother isobaths: the depth is averaged over about 20 m before tracing them, so they lose the corners of the 10 m grid and still never cross.
- The Spots tab is now first in the bottom bar, before the Map.
- Back does nothing on the map, so an accidental press no longer leaves it.
- The estimated depth of Ricobayo started at a bridge: the water past it, down to the dam, was missing. Arms of a reservoir split by bridges or causeways are now all mapped, and the level-volume curve of every uncalibrated reservoir counts their water too, which changes the estimated depths (closer to each dam's height in most of them).

## 0.10.0-beta.11 - 2026-10-14

- Estimated depth for Bornos, Orellana, El Atazar and Valmayor. Most of the bed of Orellana, El Atazar and Valmayor has never been seen dry, so their deep part is extrapolated from the banks.
- Better estimated depth in every uncalibrated reservoir: deep zones never seen dry now follow the valley shape towards the dam instead of a flat floor, and satellite noise near the dams no longer shows as false shallows.

## 0.10.0-beta.10 - 2026-10-14

- Six reservoirs of Andalusia: La Breña II, Puente Nuevo, Zahara-El Gastor, Guadalhorce-Guadalteba, Giribaile and El Pintado, with their level (real time where there is a SAIH), history since 1988, outline, dam, weather and historical photos.
- Estimated depth for 31 more reservoirs (beta, not yet calibrated with measured depths), among them Zahara-El Gastor, La Breña II, La Serena, Cíjara, Almendra, Iznájar and Mequinenza.

## 0.10.0-beta.9 - 2026-10-14

- The Zújar reservoir, right below La Serena's dam: its level (weekly and real time), history since 1988, outline, dam, weather and historical photos. The water west of La Serena's dam is the Zújar, so the map now knows it and its layers work there.
- New app icon: the InfoSpot compass over water and contour lines, in colour (and its outline for themed icons).

## 0.10.0-beta.8 - 2026-10-14

- Spots tab, with the bottom bar as Map, Spots, Home (in the middle), Reservoirs and Weather: every spot grouped by the reservoir it is on, with the catch photos; tapping one shows it on the map.
- A catch can have the fish's weight (numeric keyboard) and a photo (camera or gallery).
- Share a spot (WhatsApp or any app): a message naming InfoSpot, the photo, and a link that opens the spot in the app (which offers to save it) or offers the download.
- A reservoir's page has "See on the map" and "Day by day and hour by hour", which opens its forecast in the Weather tab without making it a favourite.
- Layers panel with picture cards for the current maps and chips for the photo years; what is on the map is listed at the top and can always be switched off, even away from its reservoir.
- Over Portugal the orthophoto is the DGT's newest one, sharp without starring or downloading.
- The estimated depth is offered only with the map over a reservoir that has it, and switches off when the map leaves it.
- The centre-on-me button needs a double tap; Record and Mark here are icon buttons.
- Sun and moon in two tiles (sun, moon) and the solunar periods as chips; the sun-path and the 24-hour charts are gone.
- On a reservoir with spread arms (La Serena) the historical photos disappeared when the map was centred on land between the arms: the whole area of its photos now counts as the reservoir.

## 0.10.0-beta.7 - 2026-10-14

- The app is now called InfoSpot, with its own logo (contour lines and a crosshair) as the launcher icon, also in themed icons and on the splash screen. Updates install over FishingApp as before.
- The original river channel layer: its automatic trace strayed from the river in many reservoirs. It will come back once it is done well.

## 0.10.0-beta.6 - 2026-10-14

- Baixo Sabor, the first reservoir of Portugal: outline, dam, river, weather, its weekly level from the bulletin of Portugal's environment agency (APA) with its history since 2024, the Portuguese orthophotos of the DGT (1995 to 2025) as historical photos, and the original Sabor river traced on the 2007 one.
- A reservoir's page lists only the photo years it has, and its offline download offers its oldest photo instead of always the 1956 one.
- A historical photo switched on at one reservoir painted a white patch at a reservoir it does not cover: it is now drawn only where it has imagery.
- The 7-day change no longer compares with a reading months old when the history has a gap.

## 0.10.0-beta.5 - 2026-10-13

- Tablet layout: the tabs move to a rail on the left, the screens keep a readable width, and tablets turn to landscape. Phones stay upright.
- Historical photos were cut close to the reservoir (La Serena looked half cut): they now reach about 3 km around it, dam and river below included.
- The dam of Picadas, Oliana and Sau was in the wrong place (another dam, the middle of the water, land): it is now the named dam from OpenStreetMap.

## 0.10.0-beta.4 - 2026-10-13

- Level history since 1988 for every reservoir of Spain in the list (Ministry's Hydrological Bulletin), as the Galician ones had: charts of 1 year, 5 years and all.
- The original river channel stayed on land in many reservoirs: the band now follows only the river as dark as on the 1956-57 photo, at most 50 m from its course and always inside the reservoir.
- Without a GPS position (indoors, no signal) Home and Weather no longer stay loading: they say so and suggest starring a reservoir.

## 0.10.0-beta.3 - 2026-10-13

- Belesar's estimated depth was about 20 m short in the deep part: calibrated with two depths measured on the water at full level (now 70 m and 46 m where they were 50 m and 26 m).

## 0.10.0-beta.2 - 2026-10-13

- Colour palettes in Settings → Colours: night blue (default), water, forest, sand, sunset or the wallpaper's colours.
- The Search tab is gone: reservoirs are searched in the Reservoirs tab.
- The app icon is Android's default one for now.
- Weather: every day of the week opens hour by hour (a forecast saved by an older version kept only one day and is now fetched again).
- The speed on the map no longer shows movement from GPS noise: no speed with a poor position, and zero while still.
- Switching from the map to another tab no longer shows both screens at once for a moment.

## 0.10.0-beta.1 - 2026-10-13

- Weather: tap a day to see it hour by hour, with temperature, sky, chance of rain, wind speed, direction and gusts; the next hours show the wind too.
- Historical photos of the IGN for all Spain (1956-57 American flight, 1973-86, 1981-86, 1997-2003 and every PNOA year since 2004), drawn only on the reservoir in the centre of the map; the layers panel lists the years with photos there, with a star and a download of that year of the reservoir.
- Original river channel as a band with its width, from the 1956-57 American flight, for the reservoirs built after it.
- A map button to switch the GPS off and save battery (track recording keeps working).
- New look of its own: night blue with an orange accent, Space Grotesk typeface, tighter corners and a new icon.
- The estimated depth and isobaths are labelled beta.
- The reservoir list moves from Galicia to the 45 main black bass reservoirs of Spain (7 in Galicia: Eiras, Castrelo, Frieira, Os Peares, Velle, Belesar and Santo Estevo), with level, weather, map pill on the dam and alerts. Levels are read from each region's page. Favourites, spots, tracks and photos are kept; the Galician reservoirs that left the list go with their readings. Historical photos and river channels still cover Galicia only.
- The map starts over Spain on a new install.

## 0.9.0-beta.1 - 2026-10-12

- Weather alerts, each with its switch in Settings: the morning of each main moon phase, a pressure drop of 4 hPa or more coming in the next 12 hours at a favourite reservoir, and rain (60 % or more) in the next 12 hours at a favourite. At most one of each kind per place and day; tapping one opens Weather on that reservoir.
- The weather of Edrada and Riocobo is now taken at the reservoir, not at its municipality.

## 0.8.0-beta.5 - 2026-10-12

- Weather tab redesigned: the next 24 hours with their sky and chance of rain, wind with an arrow to where it blows, pressure with a chart of the last 3 and next 6 hours, humidity bar, 7 days with sky, chance of rain and a temperature range bar, and the Sun and moon card with the sun's arc. While the first forecast loads, the screen shows its shape instead of half-drawn cards.
- Reservoir name pills on the map stand on each dam.
- "Mark here" starts where the map is; the centre button puts the crosshair on your position.
- The map credits button sits at the bottom left, in line with Record and Mark here.

## 0.8.0-beta.4 - 2026-10-12

- Estimated depth at a high level (Belesar above about 60 %): the water no longer stops short of the shore; it now reaches the ground the full reservoir covers, with the shore line up to 100 %.

## 0.8.0-beta.3 - 2026-10-12

- Search tab: find a reservoir by name or river, nearest first, with the favourites, near you and ramps chips; a result opens the map on it with its panel.
- Speed, heading and the estimated depth where you are on the map, each one with its switch in Settings → Map.
- Map buttons to centre on you and to turn north up; the map credits behind a small ⓘ button.
- Estimated depth at a level you choose: turn off Auto under the reservoir's level in Layers.
- New tabs: Home, Map, Search, Reservoirs and Weather. Settings open from the profile button on Home.
- "Mark here" shows a crosshair: unmoved, it marks your position (averaged GPS); move the map to mark any other point, with the estimated depth under it. Long press no longer adds a spot.
- The depth legend and the data notices are no longer drawn over the map.

## 0.8.0-beta.2 - 2026-10-12

- Map in the new design: floating search for reservoirs (by name or river) with the layers and map tools buttons, filter chips (favourites, near you, and "Ramps": your Access spots), a name pill per reservoir, and a panel for the chosen one with river, municipality, distance, weather, level, favourite star, Directions (your maps app) and See forecast (opens Weather on it).
- The GPS bar on the map shows only while navigating, recording or without the location permission.
- Release notes in the update card no longer show the changelog's headings.

## 0.8.0-beta.1 - 2026-10-12

- New Material 3 design: water-blue colours, light or dark (Settings → Theme), Google Sans Flex, and five tabs: Home, Map, Reservoirs, Weather and Settings.
- Home, "Today on the water": the municipality where you are (worked out on the phone), the weather there now, the moon with the next full moon, sunrise and sunset, and the favourite reservoirs with their river, distance, level and weather.
- Weather tab: where you are or at a favourite reservoir, with the next hours, wind and gusts, pressure trend, humidity and dew point, the moon, 5 days and the sun and moon card.
- Reservoirs: search by name or river, and filters for favourites, near you and by river.
- Settings tab: use of the location outside the map, daily summary, theme, favourites, CSV export and About.
- The sun and moon card moved from Home to Weather; About, the daily summary and the CSV export moved to Settings.

## 0.7.0-beta.4 - 2026-10-12

- Original river channel layer, in the depth section of the layers panel: the river's course before the dam for Castrelo, Frieira, Peares and Santo Estevo, where a depth map is not possible. Solid where traced on the 1956-57 photos, dashed where approximate (middle of the canyon), with a legend.

## 0.7.0-beta.3 - 2026-10-11

- Isobaths layer: the shore at today's level as a cyan line, so the waterline shows over any map even when the photo was taken with the water higher or lower.
- The dashed outline of the bed never seen dry crossed the deepest isobaths; all lines now come from the same depth field and no longer cross.

## 0.7.0-beta.2 - 2026-10-11

- Isobaths: depth contour lines every 5 m (10 m when zoomed out), numbered every 10 m, at the reservoir's current level. A layer of its own, over the depth colours or alone over the map, with a dashed outline of the bed never seen dry. Computed on the phone from the same depth data.

## 0.7.0-beta.1 - 2026-10-11

- Estimated depth layer on the map (Belesar for now): the water coloured by depth at the latest reading, with a legend, and a tap readout with the estimated depth and where it comes from (IGN LiDAR, satellite images about ±5 m, or deeper than the lowest level on record). Built from Sentinel-2 and Landsat images over the years and the IGN LiDAR; works offline. Not for navigation.

## 0.6.0-beta.1 - 2026-10-10

- Weather on each reservoir screen (Open-Meteo): now, the next 24 hours and 7 days, with wind direction and gusts (strong gusts highlighted), rain, temperature and the 3-hour pressure trend. The forecast is kept for an hour and the last one is shown without coverage.

## 0.5.0-beta.6 - 2026-10-10

- Settings changed on one screen, such as starred historical years, now show on the others at once instead of after restarting the app (release builds lost the change notification).

## 0.5.0-beta.5 - 2026-10-10

- Favourite historical years per reservoir: star them on the reservoir screen and the layers panel lists only those while that reservoir is in the centre of the map (all starred years elsewhere, every year when none are starred, and a "Show all years" button). Included in the backup.

## 0.5.0-beta.4 - 2026-10-10

- Map layers: the layers button opens a panel where several IGN maps and historical photos can be switched on together, each with its own opacity. It replaces the single base-layer choice and the separate historical photo button and bar. Earlier choices carry over.

## 0.5.0-beta.3 - 2026-10-10

- Clearer Sun and moon card: sun and moon side by side, the moon drawn in its real phase, hours of daylight, and a 24-hour bar with daylight, the solunar periods and the current time.

## 0.5.0-beta.2 - 2026-10-10

- Download a whole reservoir for use without coverage, from its screen: the 1956 photo or the current map of the water and 250 m of shore only, with the size shown before starting. Uses OpenStreetMap outlines, available for 29 of the 35 reservoirs.

## 0.5.0-beta.1 - 2026-10-10

- Historical aerial photos of the Xunta de Galicia on the map (1956-57, 1980-86, 1999-2000 and 2002 to 2023), with a slider to fade them into today's map. The 1956-57 photo, taken before most dams were filled, can be downloaded per area for use without coverage.
- Sun and moon card on Home: sunrise and sunset, moon phase, moonrise and moonset, and solunar periods for any day, computed on the phone.

## 0.4.0-beta.1 - 2026-10-10

- The app follows the phone language: English, and Spanish on a phone in Spanish.
- Backup: save all your data (favourites, settings, readings, spots, tracks and photos) to a file and restore it on another phone or after a reinstall.
- Storage screen: what the map, the database, temporary files and the log take, with buttons to free them.
- Battery screen: how to keep Android from stopping the daily sync or a track recording.
- Open-source licences listed automatically from the libraries the app uses.
- Mandatory updates: a release can block older versions until they update.
- New interface built with Jetpack Compose and Material 3; same screens and features.
- The system splash screen and predictive back gesture of Android 12+.
- Faster start thanks to a bundled Baseline Profile.
- Requires Android 12 or later.
- The CSV export uses English column names.
- Open dialogs, the spot being edited and the navigation target survive Android closing the app in the background.

## 0.3.0-beta.2 - 2026-10-09

- Same app as 0.3.0-beta.1 with a higher version number: the USB test build on the phone already used 0.3.0-beta.1, so the in-app updater did not offer the release.

## 0.3.0-beta.1 - 2026-10-09

- Home tab: favourite reservoirs, summary of spots and tracks, and the installed version.
- About screen: version, update check, disclaimer, privacy, app log (share or clear), data attribution and open-source licenses.
- On-device app log (about 2 MB at most, never sent) with syncs, tracks, offline areas, GPX, photos, updates and crashes.
- Colors follow the system wallpaper (Material You) on Android 12 and later.
- Portrait only.
- Smaller release APK (R8).
- Downloaded update APKs are deleted on the next start.
- Android backup keeps the database and settings but skips the log and the offline map cache.
- Network connections are HTTPS only.

## 0.2.0-beta.1 - 2026-10-05

- Map tab with PNOA orthophoto, IGN base map and MTN topographic map.
- Fishing spots by type, with "Mark here" averaging the GPS and adding by long press.
- Navigation to a spot with distance and bearing.
- Track recording in the background.
- Offline area download to use the map without coverage.
- GPX import and export.

## 0.1.0-beta.1 - 2026-10-04

- First beta: levels of the Galician reservoirs, history since 1988, daily sync, summary notification, charts, photos and CSV export.
