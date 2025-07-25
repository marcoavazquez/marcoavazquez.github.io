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


// @todo
- Checar ATS Resume Checker
- Agregar titulos a email y datos donde hagan falta
- Crear una opción para adaptarlo de acuerdo al tipo de solicitud:
  - Backend
  - Frontend
  - Fullstack
- Agregar donde se haya habido comunicación entre clientes o usuarios
-  En tu caso recomendaría utilizar más de un tamaño de fuente, tal vez para los títulos de apartados de tu currículum
- Al indicarles la ciudad en la que vives, incluida la provincia y el código postal, la empresa se hace una mejor idea de cuál es tu ubicación respecto al lugar de trabajo y, cuando procede, de tu disposición para viajar o mudarte.
- tu dirección de correo electrónico como tu número de teléfono.
- En resumen profesional: Esta sección debería incluir información sobre tus mayores logros, habilidades, y cualificaciones, además de una descripción breve de tus objetivos profesionales.
  - deberías ampliarlo y mejorarlo. Recomiendo que lo extiendas para que ocupe entre 50 y 100 palabras.
- Desgraciadamente, tu currículum carece de sección de habilidades, por lo que no llamará tanto la atención de los sistemas de gestión de solicitudes ni de los responsables de contratación. Añade esta sección al currículum e incluye en ella entre 8 y 15 habilidades. No menciones todas y cada una de tus habilidades: céntrate en las más relacionadas con el puesto que quieres solicitar.

- Redacción: Sugiero que cambies esas frases incorporando verbos que plasmen mejor tus logros y responsabilidades, así como datos y cifras que los respalden. Debería resultarte sencillo; a continuación te he propuesto un par de ejemplos para ayudarte:
  Ejemplos de expresiones flojas:
  "Responsable de gestionar todas las actividades comerciales"
  "Fui supervisor de siete agentes de servicio al cliente"
  Para mejorar estas expresiones podrías decir, por ejemplo:
  “Lideré todas las actividades comerciales y aumenté los ingresos anuales un 60%"
  "Supervisé un equipo de siete agentes de servicio al cliente y disminuí el tiempo de tramitación un 20%"