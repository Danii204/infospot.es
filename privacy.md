---
permalink: /privacy/
title: InfoSpot privacy
---

# InfoSpot privacy

Last updated: 2026-11-12.

**Summary: the app and the website keep your spots, tracks, photos and settings on your device. The
author receives personal data only if you write to him (for example a depth report or a problem
report), and the servers he runs keep no personal data beyond short-lived security records.** The
details follow.

## Who is responsible

The controller is Daniel Acevedo, a private individual in Spain who makes InfoSpot as a free,
personal project. Contact: <soporte@infospot.es>. There is no data protection officer (not required
for this project).

## The app

| Permission / data | Purpose | Where it is stored |
| --- | --- | --- |
| Location (precise) | Show your position on the map, mark fishing spots, navigate to them and record tracks; on Home and Weather, the weather, moon and municipality where you are, and the distance to each reservoir (turn it off in Settings → Use my location) | On the phone only (database). The municipality is worked out on the phone from bundled boundaries |
| Location in a foreground service | Keep recording a track with the screen off, with a visible notification | On the phone only |
| Internet | Download reservoir levels and map tiles, and check for updates | — |
| Notifications | Daily reservoir summary, weather alerts (moon, pressure, rain) and the "Recording track" notice | — |
| Camera and photos | Photos of a reservoir or of a catch, chosen or taken by you | Phone gallery (`Pictures/FishingApp`); the database keeps the reference, date and note |
| Install apps | Install the updates you confirm (not in the Google Play version) | — |
| App log | Find the cause of a failure: starts, syncs, errors (no coordinates, no personal data) | On the phone only, at most about 2 MB; you can share or clear it from Settings → Help and feedback |

All of this stays on your phone: the author never receives it. The app sends no statistics and
contains no advertising or tracking libraries.

**Android backup.** If Android backup is on for your phone, the app's database and settings are
included in it (Google Drive, encrypted with your screen lock) so they come back when you change
phones. The debug log is never backed up, and neither are the offline map areas. Google provides
this backup to you; you control it in Android Settings → Google → Backup.

**In-app backup file.** Settings → Backup saves your favourites, settings, readings, spots, tracks
(with their exact positions) and photos to a ZIP file in the place you choose. The app does not
upload it anywhere; keep it somewhere private.

**Sharing a spot.** Nothing is shared unless you tap **Share** on a spot. Then the message you send
(through the app you choose, such as WhatsApp) carries the spot's name, type, position, weight and
date, its photo if it has one, and a link to a static page on the app's website
(`infospot.es/spot.html`, hosted on GitHub Pages). The spot travels in the link after `#`, which
browsers never send to a server: whoever opens the link loads the page from GitHub, which sees their
IP address like any website, but not the spot. The page sends nothing and passes no address on to
other sites; only if the person taps "See it on a map" does their browser open OpenStreetMap with the
spot's position. Links shared by earlier versions of the app and the website carry the spot after
`?`, which GitHub's server does receive when they are opened; they still work. Notes are never
shared.

**Reporting a depth and reporting a problem.** Nothing is sent unless you tap **Report the real
depth** on the map, or **Report a problem** in Help, and then send the email your email app opens.
A depth report carries what you see in it: the reservoir, the point you tapped, the depth and day you
typed, the app's estimate and level there, your note and the app version. A problem report carries
the app log. Both carry your email address as the sender.

## The website

The website (`infospot.es`) is a set of static pages and a web app (`infospot.es/app`) that runs in
your browser. It has no accounts, no cookies and no advertising.

**What your browser keeps (needed for the service you ask for).** These are kept only in your
browser, are never sent to the author and are deleted when you clear the site's data. Under article
22.2 of the Spanish LSSI they are strictly necessary for the service you request, so they need no
consent:

| Kept in the browser | Purpose |
| --- | --- |
| `infospot.lang` (local storage) | The language you chose (also read by the home page) |
| `infospot.favourites`, `infospot.starredYears` | Your favourite reservoirs and the historical years you starred |
| `infospot.bases`, `infospot.opacity.*` | The base maps and the opacity of each layer you chose |
| `infospot.useLocation`, `infospot.tourSeen` | Whether you allowed your location on Home, and that the welcome tour was seen |
| `infospot.offline` | Which map areas you downloaded |
| IndexedDB database `infospot` | Your spots, tracks and their photos |
| Service worker caches `shell…`, `data`, `tiles` | The website, the levels and the last weather to work without coverage, and the map tiles you download |

The delete buttons next to each download and at the end of the reservoir list remove the downloaded
maps; GPX export makes a copy of your spots and tracks.

**Your position** is used only if you allow it in the browser: to show it on the map with your speed
and heading, to record a track and mark spots (kept in the browser) and, on Home, for the weather
where you are, asked to Open-Meteo with the position rounded to about 1 km. With the estimated depth
on, the depth where you are is asked to the depth server below, which does not keep positions.

**Visit count.** Each time the web app is opened, it sends one empty request to InfoSpot's depth
server, which adds 1 to that day's count. That is the website's only statistic. The request carries
nothing beyond what any request carries (your IP address and browser description, which the server
uses only to limit abuse for about a minute and never stores); nothing is read from or written to your
device for it. What is stored is one number per day, which identifies no one, kept for 25 months. The
home page, the reservoir pages and the spot page send nothing. This is audience measurement limited
to the author's own anonymous figures, which the AEPD's guide on audience measurement tools (2024)
treats as exempt from consent.

**The depth server and the map storage.** The estimated depth is served by InfoSpot's depth server
(`infospot.infospot-worker.workers.dev`, on Cloudflare Workers; Cloudflare acts as processor): the
web app asks it for the depth at a point you tap or where you are. The map pictures of the depth and
the copies of the DGT's orthophotos come from InfoSpot's map storage at `mapas.infospot.es`
(Cloudflare R2), which keeps no record of who asks for them. To protect the depth maps from bulk
copying (see the [terms of use](https://infospot.es/terms/)), the depth server limits how many
requests each visitor makes and records each request's type and reservoir together with a code made
from the IP address and the current month with a fixed secret key, so the same address gives a
different code each month (the IP itself is not stored, and the position asked is never recorded).
Those records are kept three months by Cloudflare and are used only to detect and act against bulk
downloading. To apply the daily limit on depth points, the server keeps how many points each visitor
asked for that day under another code made from the IP address with the same secret key; that count
is replaced the next day the same address asks.

**GitHub Pages.** The pages are hosted by GitHub, which receives your IP address and the address of
the page you open, like any web host, and may keep it in its security logs (GitHub's privacy
statement).

## The levels job

Twice a day a scheduled job on GitHub (not your phone) reads the official level sources (the
Ministry's Hydrological Bulletin, the Duero, Miño-Sil and Guadalquivir basin authorities, the Junta
de Andalucía, the Catalan Water Agency and the Agência Portuguesa do Ambiente) and publishes one
file at `infospot.es/data/levels.json`. It handles no personal data.

## Services your device connects to

Your device connects directly to these services; each sees your IP address and what is asked, as any
connection does, and handles it under its own privacy policy. InfoSpot receives none of it. Checked
against the code of the app and the website on 2026-11-12.

| Service (host) | Who runs it | What for | App | Website |
| --- | --- | --- | --- | --- |
| `infospot.es`, `danii204.github.io` | GitHub (GitHub Pages) | The website, the levels file, the spot page, the wind and rain maps | yes | yes |
| `github.com`, its download servers, `api.github.com` | GitHub | Updates (not in the Google Play version) and the depth map of a reservoir the first time it is shown | yes | — |
| `infospot.infospot-worker.workers.dev` | Cloudflare (processor for InfoSpot) | Depth at a point, visit count | — | yes |
| `mapas.infospot.es` | Cloudflare R2 (processor for InfoSpot) | Depth map pictures, copies of the DGT orthophotos | yes | yes |
| `www.ign.es` | Instituto Geográfico Nacional (Spain) | Orthophoto, base maps, historical photos | yes | yes |
| `cartografia.dgterritorio.gov.pt` | Direção-Geral do Território (Portugal) | Orthophotos of Portugal beyond InfoSpot's copy | yes | yes |
| `tiles.maps.eox.at` | EOX IT Services GmbH (Austria) | Satellite image of Portugal from afar | yes | yes |
| `tiles.openfreemap.org` | Hyperknot Software Kft. (Hungary) | Map under the wind and rain map | yes | yes |
| `s3.amazonaws.com` | Amazon Web Services | Relief under the wind and rain map (Terrain Tiles) | yes | yes |
| `api.open-meteo.com` | OpenMeteo GmbH (Switzerland) | Weather forecast | yes | yes |
| Google Play, Android backup | Google | Installing and updating the Play version; your phone's backup | yes | — |

The map, photo and relief requests carry the map area, not your GPS position. Weather requests carry
a reservoir's location or, for Home and Weather, your position rounded to about 5 km in the app
(0.05°) and about 1 km on the website; the app asks at most once an hour per place, and the weather
alerts check the favourite reservoirs every six hours. Links you tap yourself (directions in Google
Maps or your maps app, OpenStreetMap from a shared spot, the email app) open those services with the
place shown.

## Legal bases

- Everything the app and the browser keep on your device is your own processing: the author never
  receives it.
- The emails you send (depth reports, problem reports, questions): the author's legitimate interest
  in answering you and correcting the depth maps (GDPR article 6.1.f).
- The depth server's records and limits, and GitHub's and Cloudflare's handling of the IP address to
  deliver the website: legitimate interest in running the service securely and protecting the depth
  maps from bulk copying (article 6.1.f).
- The visit count stores no personal data; sending it is audience measurement exempt from consent
  under LSSI article 22.2 as the AEPD reads it.

**You can object** at any time to processing based on legitimate interest, for reasons related to
your situation (GDPR article 21), by writing to <soporte@infospot.es>.

## Who receives data, and transfers outside the EU

- Cloudflare, Inc. (depth server, map storage) acts as processor under its data processing addendum;
  the visit counts are stored in a Cloudflare D1 database.
- GitHub, Inc. hosts the website and the downloads as an independent controller of its own logs.
- The emails to <soporte@infospot.es> are forwarded by ImprovMX to the author's mailbox.
- Google provides Google Play and Android backup to you directly.

Cloudflare, GitHub, Google and Amazon are companies in the United States. Transfers to them rely on
the EU-U.S. Data Privacy Framework (European Commission adequacy decision of 10 July 2023): on
2026-11-12 Cloudflare, Inc., GitHub, Google LLC and Amazon.com, Inc. appeared as active participants
on the official list at <https://www.dataprivacyframework.gov/list>. Switzerland (Open-Meteo) has an
adequacy decision; EOX (Austria) and OpenFreeMap (Hungary) are in the EU.

## How long

| Data | Kept |
| --- | --- |
| Depth server records (request type, reservoir, monthly code) | 3 months |
| Daily depth-point count per code | Until the same address asks on another day |
| Visit count (one number per day) | 25 months |
| Emails (depth reports, problem reports, questions) | Until answered or used, at most 12 months |
| GitHub's and Cloudflare's own logs | As their privacy policies say |

## Your rights

You can ask for access to your data, rectification, erasure, restriction of processing, portability
and objection (GDPR articles 15 to 22) by writing to <soporte@infospot.es>; you will get an answer
within one month. The depth server's records hold only codes, so to find yours the author would need
your IP address and the dates (GDPR article 11). Data kept on your device you control yourself: in
the app, Android Settings → Apps → InfoSpot → Storage → Clear data, or uninstall it (photos stay in
your gallery until you delete them there); on the website, clear the site's data in your browser.

If you think your data has not been handled properly, you can complain to the Spanish data
protection authority, the Agencia Española de Protección de Datos (<https://www.aepd.es>, C/ Jorge
Juan 6, 28001 Madrid).

## Children

InfoSpot is not aimed at children under 14 and nothing in it relies on consent. If a child under 14
has written to the author, the parents or guardians can ask for the email to be deleted.

## No automated decisions

InfoSpot makes no decisions about you with legal or similarly significant effects and builds no
profiles. The only automatic measure is the depth server's request limit, which pauses the depth
for a visitor who asks for too much, for a minute or until the end of the day (UTC).

## Changes

The date at the top shows the last change. Important changes are announced in the app's release
notes and on the website.

## Contact

Write to <soporte@infospot.es>, or open an issue at
<https://github.com/Danii204/FishingApp-releases/issues>.
