---
permalink: /privacidad/
title: Privacidad de InfoSpot
lang: es
---

# Privacidad de InfoSpot

Última actualización: 2026-10-21.

**Resumen: InfoSpot no envía tus datos a nadie, tampoco al autor.** Todo se guarda en tu móvil
(y en tu propia copia de seguridad de Android, si la usas).

## Qué usa y para qué

| Permiso / dato | Para qué | Dónde se guarda |
| --- | --- | --- |
| Ubicación (precisa) | Ver tu posición en el mapa, marcar puntos de pesca, navegar hasta ellos y grabar tracks; en Inicio y Tiempo, el tiempo, la luna y el concello donde estás, y la distancia a cada embalse (se desactiva en Ajustes → Usar mi ubicación) | Solo en el móvil (base de datos). El concello se calcula en el móvil con los límites que trae la app |
| Ubicación en un servicio en primer plano | Seguir grabando un track con la pantalla apagada, con una notificación visible | Solo en el móvil |
| Internet | Descargar los niveles de los embalses y el mapa, y buscar actualizaciones | — |
| Notificaciones | Resumen diario de embalses, avisos del tiempo (luna, presión, lluvia) y el aviso de «Grabando track» | — |
| Cámara y fotos | Fotos de un embalse o de una captura, elegidas o hechas por ti | Galería del móvil (`Imágenes/FishingApp`); la base de datos guarda la referencia, la fecha y la nota |
| Instalar apps | Instalar las actualizaciones que confirmes | — |
| Registro de la app | Encontrar la causa de un fallo: arranques, sincronizaciones, errores (sin coordenadas ni datos personales) | Solo en el móvil, unos 2 MB como máximo; se comparte o se borra desde Ajustes → Ayuda y sugerencias |

## Copia de seguridad

Si tienes activada la copia de seguridad de Android, la base de datos y los ajustes de la app van en
ella (Google Drive, cifrada con el bloqueo de pantalla) para recuperarlos al cambiar de móvil. El
registro de depuración nunca se incluye, y tampoco las zonas del mapa offline (se pueden volver a
descargar). Se controla en Ajustes de Android → Google → Copia de seguridad.

**Archivo de copia de la app.** Ajustes → Copia de seguridad guarda tus favoritos, ajustes, niveles,
puntos, tracks (con su posición exacta) y fotos en un archivo ZIP en el sitio que elijas. La app no
lo sube a ningún sitio; guárdalo en un lugar privado.

## Compartir un punto

No se comparte nada salvo que pulses **Compartir** en un punto. Entonces el mensaje que envías (por
la app que elijas, como WhatsApp) lleva el nombre, tipo, posición, peso y fecha del punto, su foto
si la tiene y un enlace a una página estática de la web de la app (`infospot.es`, alojada en GitHub
Pages). Quien abre el enlace carga esa página desde GitHub, que ve su dirección IP como cualquier
web; la página solo lee el enlace y no envía nada. Las notas nunca se comparten.

## Informar de una profundidad

No se envía nada salvo que pulses **Informar de la profundidad real** en el mapa y después envíes el
correo que abre tu app de correo. Ese correo llega a soporte@infospot.es y lleva lo que ves en él: el
embalse, el punto que tocaste, la profundidad y el día que escribiste, la estimación y el nivel de
la app ahí, tu nota y la versión de la app, además de tu dirección de correo como remitente. Solo se
usa para corregir los mapas de profundidad y se borra cuando deja de hacer falta.

## La web y el servidor de profundidad

La web (`infospot.es/app`) funciona en tu navegador y no guarda nada sobre ti en ningún servidor.
Tus embalses favoritos, tus ajustes (como el idioma), tus marcas, tracks y sus fotos se quedan en el almacenamiento del propio
navegador en tu dispositivo (si borras los datos del navegador, se borran; exportar un GPX hace una
copia). Tu navegador se conecta directamente a los mismos servicios de mapas, fotos y niveles que la
app (ver "Servicios externos" más abajo) y a Open-Meteo para el tiempo; como cualquier web, esos
servicios ven tu dirección IP.

Para saber cuánta gente la visita, las páginas de la web cargan Cloudflare Web Analytics (Cloudflare
actúa como encargado del tratamiento). Cuenta las visitas, las páginas vistas, el país, el tipo de
dispositivo y de navegador, la web desde la que llegas y lo que tarda en cargar la página. No usa
cookies, no guarda nada en tu navegador y no te identifica ni te sigue entre webs (interés legítimo,
artículo 6.1.f del RGPD).

Para saber qué partes de la web se usan, también envía al servidor de profundidad de InfoSpot eventos
anónimos y breves: la pantalla que abres, el embalse cuya ficha abres, y cuando activas la
profundidad, una foto histórica o un mapa base, guardas una marca, empiezas o terminas un track,
compartes, exportas o importas un GPX, cambias un favorito o el idioma, abres un día de la previsión,
buscas o usas tu posición (solo que se ha usado, nunca la posición), y una señal de que la página
sigue abierta cada 4 minutos mientras la miras. Cada uno se guarda con el país y
el tipo de dispositivo de la petición, el idioma, un código al azar de esa visita a la página que solo
existe en la memoria de la página, y un código de visitante hecho con la dirección IP y el navegador
con un secreto que cambia cada día (la IP no se guarda), de modo que se puede contar a un visitante
dentro de un día pero no seguirlo de un día a otro. No se escribe nada en tu navegador. Los guarda
Cloudflare en la UE durante 90 días y solo se usan para estas estadísticas (interés legítimo, artículo
6.1.f del RGPD).

Tu posición solo se usa si lo permites en el navegador: para mostrarla en el mapa con tu velocidad y
rumbo, grabar un track y marcar puntos (guardados en el navegador) y, en Inicio, para el tiempo donde
estás, que se pide a Open-Meteo con la posición redondeada a 1 km. Con la profundidad estimada
activada, la profundidad donde estás se pide al servidor de profundidad de abajo, que no guarda
posiciones.

La profundidad estimada la sirve el servidor de profundidad de InfoSpot en Cloudflare Workers
(Cloudflare actúa como encargado del tratamiento): la web le pide imágenes del mapa de un embalse y
la profundidad en el punto que tocas o donde estás (una versión posterior de la app también descargará de él sus
mapas de profundidad). Para proteger los mapas de profundidad de la copia masiva (ver las
[condiciones de uso](https://infospot.es/condiciones/)), el
servidor limita cuántas peticiones hace cada visitante y registra el tipo de petición, el embalse y
un código obtenido de la dirección IP (nunca la posición consultada) con un secreto que cambia cada mes (la IP no se guarda). Esos
registros se conservan tres meses y solo se usan para detectar y actuar contra la descarga masiva
(interés legítimo, artículo 6.1.f del RGPD).

## Servicios externos

La app se conecta a estos servicios. Como cualquier conexión, ven la dirección IP de tu móvil:

- La web de InfoSpot (`infospot.es`, en GitHub Pages): los niveles de los embalses, leídos de las
  fuentes de abajo por una tarea programada y publicados en un solo archivo (una vez al día y cuando
  actualizas a mano).
- embalses.net: niveles de los embalses, solo cuando ese archivo no se puede descargar o está
  desfasado.
- Agência Portuguesa do Ambiente (`apambiente.pt`): el boletín semanal con el nivel de los embalses
  portugueses (como mucho una vez por semana), en el mismo caso.
- IGN / CNIG (`www.ign.es`): teselas del mapa.
- IGN (`www.ign.es/wms/pnoa-historico`): fotos aéreas históricas, solo mientras se muestra una en el
  mapa o se descarga. Las peticiones llevan la zona del mapa, no tu posición GPS.
- DGT (`cartografia.dgterritorio.gov.pt`): ortofotos de Portugal, igual que las fotos históricas del
  IGN.
- EOX (`tiles.maps.eox.at`): teselas de satélite Sentinel-2 de Portugal, mientras el mapa muestra
  Portugal. Las peticiones llevan la zona del mapa, no tu posición GPS.
- Open-Meteo (`api.open-meteo.com`): previsión del tiempo, como mucho una vez por hora y lugar. Para
  un embalse, la petición lleva la ubicación del embalse. Para Inicio y Tiempo, lleva la zona donde
  estás: tu posición redondeada a una cuadrícula de unos 5 km (0,05°), nunca la posición exacta.
  Con Ajustes → Usar mi ubicación desactivado, solo se piden embalses. Los avisos del tiempo miran
  la previsión de los embalses favoritos en segundo plano cada seis horas, del mismo modo.
- GitHub (`github.com`, sus servidores de descarga y, si falla, `api.github.com`): buscar y descargar
  actualizaciones desde la página pública de descargas de la app (no en la versión de Google Play), y el
  mapa de profundidad de un embalse la primera vez que se muestra. No se usa ninguna cuenta ni token.

## Borrar tus datos

Ajustes de Android → Aplicaciones → InfoSpot → Almacenamiento → Borrar datos, o desinstalar la app.
Las fotos siguen en tu galería hasta que las borres allí.

## Contacto

Escribe a <soporte@infospot.es>, o abre una incidencia en
<https://github.com/Danii204/FishingApp-releases/issues>.
