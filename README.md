# COUNTRY SEARCH PROJECT 🗺️

DEMO: https://country-search-bertonatimarco.netlify.app/

## Tecnologías utilizadas

* ReactJs
* Apollo
* GraphQL
* Bootstrap

## Tecnologías utilizadas

1. Recuerda crear una carpeta
2. Clona el repositorio
3. Instala las dependencias con `npm install`
4. Ejecuta el script `npm run start`

### Desafío
`La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc.`

1. Propondia desde el backend reducir la cantidad de registros consultados, por ejemplo de los últimos 30 días.
2. Propondía separar BDDs por periodos de tiempo, por ejemplo, una tabla por mes.
3. Propondría migrar las tablas de alumnos inactivos a otras BDDs.