Proyecto Demo para consumir datos de la API SWApi.

En este proyecto vamos a utilizar las siguientes librerías:
- Pug: para poder crear las templates de una forma más sencilla y rápida
- PrimeVue: como suite de componentes, para disponer de componentes más completos que los principales, de esta forma
nos ahorramos crear mucha funcionalidad que ya nos brinda la propia librería.
- Axios: para las llamadas a la API y poder obtener los datos que se mostrarán en las diferentes partes de la aplicación

Se ha creado la siguiente estructura de carpetas:
- components: para almacenar todos los componentes Vue que se vayan creando para la aplicación, dentro de esta, se ha dividido por categorías
    - people: contiene todos los componentes referentes a la sección "People" de la API, como son el componente encargado de mostrar el listado y el componente encargado de mostrar el detalle de cada uno de los registros.
    - planets: contiene todos los componentes referentes a la sección "Planets" de la API, como son el componente encargado de mostrar el listado y el componente encargado de mostrar el detalle de cada uno de los registros.
    - starships: contiene todos los componentes referentes a la sección "Starships" de la API, como son el componente encargado de mostrar el listado y el componente encargado de mostrar el detalle de cada uno de los registros.
Dentro de la carpeta components, en su raíz se encuentra el componente "Home" que es el encargado de realizar la navegación a las diferentes partes de la aplicación

- mixins: contiene los mixin utilizados en los componentes, estos mixin almacenan las funciones necesarias para comunicarse con la API, en este caso, una función utilizada para cargar las múltiples páginas de las que dispone la API por cada una de sus secciones.

- common: contiene las diferentes clases utilizadas en todos los componentes de la aplicación. Actualmente sólo contiene una clase Util que es utilizada para almacenar métodos que puedan ser utilizados desde varios componentes, una forma de no duplicar código a lo largo de toda la aplicación.

Dentro del directorio raíz src también encontramos el fichero router.js que es el que contiene todas las rutas y sus respectivos componentes a los que redirigen.