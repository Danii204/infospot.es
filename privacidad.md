---
permalink: /privacidad/
title: Privacidad de InfoSpot
lang: es
---

# Privacidad de InfoSpot

Última actualización: 2026-11-12.

**Resumen: la app y la web guardan tus puntos, tracks, fotos y ajustes en tu dispositivo. El autor
solo recibe datos personales si le escribes (por ejemplo, un informe de profundidad o de un fallo), y
los servidores que gestiona no guardan datos personales salvo registros de seguridad de corta
duración.** Los detalles, a continuación.

## Responsable

El responsable del tratamiento es Daniel Acevedo, particular residente en España que hace
InfoSpot como proyecto personal y gratuito. Contacto: <soporte@infospot.es>. No hay delegado de
protección de datos (no es obligatorio para este proyecto).

## La app

| Permiso / dato | Para qué | Dónde se guarda |
| --- | --- | --- |
| Ubicación (precisa) | Ver tu posición en el mapa, marcar puntos de pesca, navegar hasta ellos y grabar tracks; en Inicio y Tiempo, el tiempo, la luna y el concello donde estás, y la distancia a cada embalse (se desactiva en Ajustes → Usar mi ubicación) | Solo en el móvil (base de datos). El concello se calcula en el móvil con los límites que trae la app |
| Ubicación en un servicio en primer plano | Seguir grabando un track con la pantalla apagada, con una notificación visible | Solo en el móvil |
| Internet | Descargar los niveles de los embalses, los mapas y los mapas de profundidad | — |
| Notificaciones | Resumen diario de embalses, avisos del tiempo (luna, presión, lluvia) y el aviso de «Grabando track» | — |
| Cámara y fotos | Fotos de un embalse o de una captura, elegidas o hechas por ti | Galería del móvil (`Imágenes/FishingApp`); la base de datos guarda la referencia, la fecha y la nota |
| Registro de la app | Encontrar la causa de un fallo: arranques, sincronizaciones, errores (sin coordenadas ni datos personales) | Solo en el móvil, unos 2 MB como máximo; se comparte o se borra desde Ajustes → Ayuda y sugerencias |

Todo esto se queda en tu móvil: el autor nunca lo recibe. La app no envía estadísticas y no lleva
bibliotecas de publicidad ni de seguimiento.

**Copia de seguridad de Android.** Si la tienes activada, la base de datos y los ajustes de la app van
en ella (Google Drive, cifrada con el bloqueo de pantalla) para recuperarlos al cambiar de móvil. El
registro de depuración nunca se incluye, y tampoco las zonas del mapa offline. Esa copia te la da
Google; se controla en Ajustes de Android → Google → Copia de seguridad.

**Archivo de copia de la app.** Ajustes → Copia de seguridad guarda tus favoritos, ajustes, niveles,
puntos, tracks (con su posición exacta) y fotos en un archivo ZIP en el sitio que elijas. La app no
lo sube a ningún sitio; guárdalo en un lugar privado.

**Compartir un punto.** No se comparte nada salvo que pulses **Compartir** en un punto. Entonces el
mensaje que envías (por la app que elijas, como WhatsApp) lleva el nombre, tipo, posición, peso y
fecha del punto, su foto si la tiene y un enlace a una página estática de la web de la app
(`infospot.es/spot.html`, alojada en GitHub Pages). El punto va en el enlace detrás de `#`, que los
navegadores nunca envían al servidor: quien abre el enlace carga la página desde GitHub, que ve su
dirección IP como cualquier web, pero no el punto. La página no envía nada ni pasa la dirección a
otras webs; solo si esa persona pulsa «Verlo en un mapa» su navegador abre OpenStreetMap con la
posición del punto. Los enlaces que compartieron versiones anteriores de la app y de la web llevan el
punto detrás de `?`, que el servidor de GitHub sí recibe al abrirlos; siguen funcionando. Las notas
nunca se comparten.

**Informar de una profundidad o de un fallo.** No se envía nada salvo que pulses **Informar de la
profundidad real** en el mapa, o **Informar de un problema** en Ayuda, y luego envíes el correo que
abre tu app de correo. Un informe de profundidad lleva lo que ves en él: el embalse, el punto que
tocaste, la profundidad y el día que escribiste, la estimación de la app y el nivel ahí, tu nota y la
versión de la app. Un informe de fallo lleva el registro de la app. Los dos llevan tu dirección de
correo como remitente.

## La web

La web (`infospot.es`) es un conjunto de páginas estáticas y una app web (`infospot.es/app`) que
funciona en tu navegador. No tiene cuentas, ni cookies, ni publicidad.

**Lo que guarda tu navegador (necesario para el servicio que pides).** Se guarda solo en tu
navegador, nunca se envía al autor y se borra al borrar los datos del sitio. Según el artículo 22.2 de
la LSSI es estrictamente necesario para el servicio que solicitas, así que no requiere
consentimiento:

| Guardado en el navegador | Para qué |
| --- | --- |
| `infospot.lang` (almacenamiento local) | El idioma que elegiste (también lo lee la portada) |
| `infospot.favourites`, `infospot.starredYears` | Tus embalses favoritos y los años históricos que marcaste |
| `infospot.bases`, `infospot.opacity.*` | Los mapas base y la opacidad de cada capa que elegiste |
| `infospot.useLocation`, `infospot.tourSeen` | Si permitiste tu ubicación en Inicio, y que ya viste el tour de bienvenida |
| `infospot.offline` | Qué zonas del mapa descargaste |
| Base de datos IndexedDB `infospot` | Tus puntos, tracks y sus fotos |
| Cachés del service worker `shell…`, `data`, `tiles` | La web, los niveles y el último tiempo para funcionar sin cobertura, y los mapas que descargas |

Los botones de borrar junto a cada descarga y al final de la lista de embalses quitan los mapas
descargados; exportar GPX hace una copia de tus puntos y tracks.

**Tu posición** solo se usa si la permites en el navegador: para verla en el mapa con tu velocidad y
rumbo, grabar un track y marcar puntos (guardados en el navegador) y, en Inicio, para el tiempo donde
estás, pedido a Open-Meteo con la posición redondeada a cerca de 1 km. Con la profundidad estimada
activada, la profundidad donde estás se pide al servidor de profundidad de abajo, que no guarda
posiciones.

**Recuento de visitas.** Cada vez que se abre la app web, envía una petición vacía al servidor de
profundidad de InfoSpot, que suma 1 al recuento de ese día. Es la única estadística de la web. La
petición no lleva nada más que lo que lleva cualquier petición (tu dirección IP y la descripción del
navegador, que el servidor usa solo para limitar abusos durante cerca de un minuto y nunca guarda);
no se lee ni se escribe nada en tu dispositivo para ello. Lo que se guarda es un número por día, que
no identifica a nadie, durante 25 meses. La portada, las páginas de embalses y la página de un punto
no envían nada. Es medición de audiencia limitada a cifras anónimas del propio autor, que la guía de
la AEPD sobre herramientas de medición de audiencia (2024) considera exenta de consentimiento.

**El servidor de profundidad y el almacén de mapas.** La profundidad estimada la sirve el servidor de
profundidad de InfoSpot (`infospot.infospot-worker.workers.dev`, en Cloudflare Workers; Cloudflare
actúa como encargado del tratamiento): la app web le pide la profundidad en un punto que tocas o
donde estás, y la app le descarga el mapa de profundidad de un embalse la primera vez que lo muestra. Las imágenes de la profundidad y las copias de las ortofotos de la DGT salen del
almacén de mapas de InfoSpot en `mapas.infospot.es` (Cloudflare R2), que no registra quién las pide.
Para proteger los mapas de profundidad de la copia masiva (ver las [condiciones de
uso](https://infospot.es/condiciones/)), el servidor de profundidad limita cuántas peticiones hace
cada visitante y registra el tipo de cada petición y el embalse junto con un código hecho con la
dirección IP y el mes en curso con una clave secreta fija, de modo que la misma dirección da un código
distinto cada mes (la IP no se guarda, y la posición pedida nunca se registra). Cloudflare guarda esos
registros tres meses y solo se usan para detectar y frenar la descarga masiva. Para aplicar el límite
diario de puntos de profundidad, el servidor guarda cuántos puntos pidió cada visitante ese día con
otro código hecho con la dirección IP y la misma clave; ese recuento se sustituye el siguiente día en
que pida la misma dirección.

**GitHub Pages.** Las páginas las aloja GitHub, que recibe tu dirección IP y la dirección de la página
que abres, como cualquier alojamiento web, y puede guardarla en sus registros de seguridad (según su
declaración de privacidad).

## El trabajo de niveles

Dos veces al día un trabajo programado en GitHub (no tu móvil) lee las fuentes oficiales de niveles
(el Boletín Hidrológico del Ministerio, las confederaciones hidrográficas del Duero, Miño-Sil y
Guadalquivir, la Junta de Andalucía, la Agència Catalana de l'Aigua y la Agência Portuguesa do
Ambiente) y publica un fichero en `infospot.es/data/levels.json`. No trata datos personales.

## Servicios a los que se conecta tu dispositivo

Tu dispositivo se conecta directamente a estos servicios; cada uno ve tu dirección IP y lo que se le
pide, como en cualquier conexión, y lo trata según su propia política de privacidad. InfoSpot no
recibe nada de ello. Comprobado en el código de la app y de la web el 2026-11-12.

| Servicio (dirección) | Quién lo presta | Para qué | App | Web |
| --- | --- | --- | --- | --- |
| `infospot.es`, `danii204.github.io` | GitHub (GitHub Pages) | La web, el fichero de niveles, la página de un punto, los mapas de viento y lluvia | sí | sí |
| `infospot.infospot-worker.workers.dev` | Cloudflare (encargado de InfoSpot) | Profundidad en un punto, el mapa de profundidad de un embalse la primera vez que se muestra (app), recuento de visitas | sí | sí |
| `mapas.infospot.es` | Cloudflare R2 (encargado de InfoSpot) | Imágenes de la profundidad, copias de las ortofotos de la DGT | sí | sí |
| `www.ign.es` | Instituto Geográfico Nacional (España) | Ortofoto, mapas base, fotos históricas | sí | sí |
| `cartografia.dgterritorio.gov.pt` | Direção-Geral do Território (Portugal) | Ortofotos de Portugal más allá de la copia de InfoSpot | sí | sí |
| `tiles.maps.eox.at` | EOX IT Services GmbH (Austria) | Imagen de satélite de Portugal de lejos | sí | sí |
| `tiles.openfreemap.org` | Hyperknot Software Kft. (Hungría) | Mapa bajo el mapa de viento y lluvia | sí | sí |
| `s3.amazonaws.com` | Amazon Web Services | Relieve bajo el mapa de viento y lluvia (Terrain Tiles) | sí | sí |
| `api.open-meteo.com` | OpenMeteo GmbH (Suiza) | Previsión del tiempo | sí | sí |
| Google Play, copia de seguridad de Android | Google | Instalar y actualizar la versión de Play; la copia de tu móvil | sí | — |

Las peticiones de mapas, fotos y relieve llevan la zona del mapa, no tu posición GPS. Las del tiempo
llevan la ubicación de un embalse o, en Inicio y Tiempo, tu posición redondeada a unos 5 km en la app
(0,05°) y a cerca de 1 km en la web; la app pregunta como mucho una vez por hora y lugar, y los avisos
del tiempo miran los embalses favoritos cada seis horas. Los enlaces que pulsas tú (cómo llegar en
Google Maps o en tu app de mapas, OpenStreetMap desde un punto compartido, la app de correo) abren
esos servicios con el lugar mostrado.

## Bases jurídicas

- Lo que la app y el navegador guardan en tu dispositivo es tratamiento tuyo: el autor nunca lo
  recibe.
- Los correos que envías (informes de profundidad, de fallos, consultas): interés legítimo del autor
  en contestarte y corregir los mapas de profundidad (artículo 6.1.f del RGPD).
- Los registros y límites del servidor de profundidad, y el tratamiento de la IP por GitHub y
  Cloudflare para servir la web: interés legítimo en prestar el servicio de forma segura y proteger
  los mapas de profundidad de la copia masiva (artículo 6.1.f).
- El recuento de visitas no guarda datos personales; enviarlo es medición de audiencia exenta de
  consentimiento según el artículo 22.2 de la LSSI, tal como lo interpreta la AEPD.

**Puedes oponerte** en cualquier momento a los tratamientos basados en el interés legítimo, por
motivos relacionados con tu situación (artículo 21 del RGPD), escribiendo a <soporte@infospot.es>.

## Quién recibe datos y transferencias fuera de la UE

- Cloudflare, Inc. (servidor de profundidad, almacén de mapas) actúa como encargado del tratamiento
  según su anexo de tratamiento de datos; los recuentos de visitas se guardan en una base de datos D1
  de Cloudflare.
- GitHub, Inc. aloja la web y ejecuta el trabajo de niveles como responsable independiente de sus propios registros.
- Los correos a <soporte@infospot.es> los reenvía ImprovMX al buzón del autor.
- Google te presta directamente Google Play y la copia de seguridad de Android.

Cloudflare, GitHub, Google y Amazon son empresas de Estados Unidos. Las transferencias a ellas se
basan en el Marco de Privacidad de Datos UE-EE. UU. (decisión de adecuación de la Comisión Europea
del 10 de julio de 2023): el 2026-11-12 Cloudflare, Inc., GitHub, Google LLC y Amazon.com, Inc.
figuraban como participantes activos en la lista oficial <https://www.dataprivacyframework.gov/list>.
Suiza (Open-Meteo) tiene decisión de adecuación; EOX (Austria) y OpenFreeMap (Hungría) están en la UE.

## Cuánto tiempo

| Dato | Se guarda |
| --- | --- |
| Registros del servidor de profundidad (tipo de petición, embalse, código mensual) | 3 meses |
| Recuento diario de puntos de profundidad por código | Hasta que la misma dirección pida otro día |
| Recuento de visitas (un número por día) | 25 meses |
| Correos (informes de profundidad, de fallos, consultas) | Hasta contestarlos o usarlos, como mucho 12 meses |
| Registros propios de GitHub y Cloudflare | Según sus políticas de privacidad |

## Tus derechos

Puedes pedir el acceso a tus datos, su rectificación, supresión, la limitación del tratamiento, la
portabilidad y oponerte (artículos 15 a 22 del RGPD) escribiendo a <soporte@infospot.es>; recibirás
respuesta en un mes. Los registros del servidor de profundidad solo tienen códigos, así que para
encontrar los tuyos el autor necesitaría tu dirección IP y las fechas (artículo 11 del RGPD). Los
datos guardados en tu dispositivo los controlas tú: en la app, Ajustes de Android → Aplicaciones →
InfoSpot → Almacenamiento → Borrar datos, o desinstálala (las fotos se quedan en tu galería hasta que
las borres allí); en la web, borra los datos del sitio en tu navegador.

Si crees que tus datos no se han tratado bien, puedes reclamar ante la Agencia Española de Protección
de Datos (<https://www.aepd.es>, C/ Jorge Juan 6, 28001 Madrid).

## Menores

InfoSpot no está dirigida a menores de 14 años y nada en ella se basa en el consentimiento. Si un
menor de 14 años ha escrito al autor, sus padres o tutores pueden pedir que se borre el correo.

## Sin decisiones automatizadas

InfoSpot no toma decisiones sobre ti con efectos jurídicos o igual de importantes ni elabora perfiles.
La única medida automática es el límite de peticiones del servidor de profundidad, que pausa la
profundidad para quien pide demasiado, durante un minuto o hasta el final del día (UTC).

## Cambios

La fecha de arriba indica el último cambio. Los cambios importantes se anuncian en las notas de
versión de la app y en la web.

## Contacto

Escribe a <soporte@infospot.es>.
