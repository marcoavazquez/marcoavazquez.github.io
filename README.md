El entorno de desarrollo fue creado manualmente

Instalar dependencias
`yarn`

Inicializar el entorno
`yarn dev`

Se usa `dart-sass` ya que es lo mas reciente y solo se necesita el comando `sass`
para ejecutarlo, ya trae un _watcher_ integrado.

Se usa `concurrently` para ejecutar los scripts concurrentemente:
 - el de browser-sync
 - minify archivos js
 - compilación y compresión de archivos scss

Se utiliza `browser-sync` para lanzar el servidor de desarrollo, con _livesync_
integrado. Tiene interacción sincronizada con diferentes dispositivos y
navegadores.

Se utiliza la librería `minify` para minimizar los archivos *js* y copiarlos a la
carpeta _dist_

Se utiliza `onchange` para escuchar los cambios de archivos *js* y ejecutar el
comando de _minify_
