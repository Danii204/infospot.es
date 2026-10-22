---
permalink: /privacy/
title: InfoSpot privacy
---

# InfoSpot privacy

Last updated: 2026-10-21.

**Summary: InfoSpot does not send your data to anyone, including the author.** Everything stays
on your phone (and in your own Android backup, if you use it).

## What it uses and why

| Permission / data | Purpose | Where it is stored |
| --- | --- | --- |
| Location (precise) | Show your position on the map, mark fishing spots, navigate to them and record tracks; on Home and Weather, the weather, moon and municipality where you are, and the distance to each reservoir (turn it off in Settings → Use my location) | On the phone only (database). The municipality is worked out on the phone from bundled boundaries |
| Location in a foreground service | Keep recording a track with the screen off, with a visible notification | On the phone only |
| Internet | Download reservoir levels and map tiles, and check for updates | — |
| Notifications | Daily reservoir summary, weather alerts (moon, pressure, rain) and the "Recording track" notice | — |
| Camera and photos | Photos of a reservoir or of a catch, chosen or taken by you | Phone gallery (`Pictures/FishingApp`); the database keeps the reference, date and note |
| Install apps | Install the updates you confirm | — |
| App log | Find the cause of a failure: starts, syncs, errors (no coordinates, no personal data) | On the phone only, at most about 2 MB; you can share or clear it from Settings → Help and feedback |

## Backup

If Android backup is on for your phone, the app's database and settings are included in it (Google
Drive, encrypted with your screen lock) so they come back when you change phones. The debug log is
never backed up, and neither are the offline map areas (they can be downloaded again). You control
this in Android Settings → Google → Backup.

**In-app backup file.** Settings → Backup saves your favourites, settings, readings, spots, tracks
(with their exact positions) and photos to a ZIP file in the place you choose. The app does not
upload it anywhere; keep it somewhere private.

## Sharing a spot

Nothing is shared unless you tap **Share** on a spot. Then the message you send (through the app you
choose, such as WhatsApp) carries the spot's name, type, position, weight and date, its photo if it
has one, and a link to a static page on the app's website (`infospot.es`, hosted on GitHub Pages).
Whoever opens the link loads that page from GitHub, which sees their IP address like any website;
the page only reads the link and sends nothing. Notes are never shared.

## Reporting a depth

Nothing is sent unless you tap **Report the real depth** on the map and then send the email your
email app opens. That email goes to soporte@infospot.es and carries what you see in it: the
reservoir, the point you tapped, the depth and day you typed, the app's estimate and level there,
your note and the app version, plus your email address as the sender. It is used only to correct the
depth maps and is deleted when no longer needed.

## The website and the depth server

The website (`infospot.es/app`) runs in your browser and keeps nothing about you on a server. Your
favourite reservoirs, your settings (such as the language), your spots, tracks and their photos stay in the browser's own storage on your
device (clearing the browser's data deletes them; GPX export makes a copy). Your browser connects
directly to the same map, photo and level services as the app (see "External services" below) and to
Open-Meteo for the weather; like any website, those services see your IP address.

To know how many people visit it, the website's pages load Cloudflare Web Analytics (Cloudflare acts
as a processor). It counts visits, the pages seen, the country, the type of device and browser, the
site you came from and how fast the page loaded. It uses no cookies, keeps nothing in your browser
and does not identify you or follow you across sites (legitimate interest, GDPR article 6.1.f).

To know which parts of the website are used, it also sends InfoSpot's depth server short anonymous
events: the screen opened, the reservoir whose page you open, and when you turn on the depth, a
historical photo or a base map, save a spot, start or stop a track, share, export or import GPX,
change a favourite or the language, open a day of the forecast, search or use your position (only
that it was used, never the position), and a sign that the page is still open every 4 minutes
while you look at it. Each is stored with the country and the type of device of the
request, the language, a random code of that page visit kept only in the page's memory, and a
visitor code made from the IP address and the browser with a secret that changes every day (the IP is
not stored), so a visitor can be counted within a day but not followed from one day to the next.
Nothing is written to your browser. They are stored by Cloudflare in the EU, kept 90 days and used
only for these statistics (legitimate interest, GDPR article 6.1.f).

Your position is used only if you allow it in the browser: to show it on the map with your speed and
heading, to record a track and mark spots (kept in the browser) and, on Home, for the weather where
you are, asked to Open-Meteo with the position rounded to about 1 km. With the estimated depth on,
the depth where you are is asked to the depth server below, which does not keep positions.

The estimated depth is served by InfoSpot's depth server on Cloudflare Workers (Cloudflare acts as
a processor): the website asks it for map pictures of one reservoir and for the depth at a point you
tap or where you are (a later app version will also download its depth maps from it). To protect the depth maps from
bulk copying (see the [terms of use](https://infospot.es/terms/)), the server limits how many requests each visitor makes and records
each request type, reservoir and a code made from the IP address (never the position asked) with a secret that changes every
month (the IP itself is not stored). Those records are kept three months and are used only to detect
and act against bulk downloading (legitimate interest, GDPR article 6.1.f).

## External services

The app connects to these services. Like any connection, they can see your phone's IP address:

- InfoSpot's website (`infospot.es`, on GitHub Pages): the reservoir levels, read from the sources
  below by a scheduled job and published as one file (once a day and when you refresh).
- embalses.net: reservoir levels, only when that file cannot be downloaded or is out of date.
- Agência Portuguesa do Ambiente (`apambiente.pt`): the weekly bulletin with the level of the
  Portuguese reservoirs (at most once a week), in the same case.
- IGN / CNIG (`www.ign.es`): map tiles.
- IGN (`www.ign.es/wms/pnoa-historico`): historical aerial photos, only while one is shown on the map
  or being downloaded. The requests carry the map area, not your GPS position.
- DGT (`cartografia.dgterritorio.gov.pt`): orthophotos of Portugal, the same way as the IGN's
  historical photos.
- EOX (`tiles.maps.eox.at`): Sentinel-2 satellite tiles of Portugal, while the map shows Portugal.
  The requests carry the map area, not your GPS position.
- Open-Meteo (`api.open-meteo.com`): weather forecast, at most once an hour per place. For a
  reservoir the request carries the reservoir's location. For Home and Weather it carries the area
  where you are: your position rounded to a grid of about 5 km (0.05°), never the exact position.
  With Settings → Use my location off, only reservoirs are asked for. The weather alerts check the
  favourite reservoirs' forecasts in the background every six hours, the same way.
- GitHub (`github.com`, its download servers and, as a fallback, `api.github.com`): check for and download
  updates from the public downloads page of the app (not in the Google Play version), and the depth
  map of a reservoir the first time it is shown. No account or token is used.

## Deleting your data

Android Settings → Apps → InfoSpot → Storage → Clear data, or uninstall the app. Photos stay in
your gallery until you delete them there.

## Contact

Write to <soporte@infospot.es>, or open an issue at
<https://github.com/Danii204/FishingApp-releases/issues>.
