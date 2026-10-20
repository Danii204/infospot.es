---
permalink: /privacidad/
title: Privacidad de InfoSpot
lang: es
---

# Privacidad de InfoSpot

Última actualización: 2026-10-20.

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

## Servicios externos

La app se conecta a estos servicios. Como cualquier conexión, ven la dirección IP de tu móvil:

- embalses.net: niveles de los embalses (una vez al día y cuando actualizas a mano).
- Agência Portuguesa do Ambiente (`apambiente.pt`): el boletín semanal con el nivel de los embalses
  portugueses (como mucho una vez por semana).
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
