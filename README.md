# Prueba Técnica: Desarrollador Full Stack Junior

## Objetivo de la prueba

El objetivo de esta prueba es evaluar tus habilidades en el desarrollo de aplicaciones Full Stack utilizando React para el frontend, Node.js para el backend, Sequelize como ORM, y una base de datos SQL. Queremos observar tu capacidad para estructurar y conectar una aplicación cliente-servidor, manejar datos en la base de datos, y trabajar con dependencias y herramientas estándar.

## Instrucciones Generales

Requisitos
Clona el repositorio base que contiene un proyecto inicial de frontend con React.
Desarrolla un backend con Node.js que permita administrar un recurso de películas.
Integra el frontend suministrado con el backend que construyas.

## Requerimientos Específicos

## Backend

- Configuración:
  Usa Node.js como entorno de ejecución.
  Usa Express.js como framework para construir el servidor.
  Usa Sequelize como ORM para interactuar con una base de datos SQL.
  Configura una base de datos relacional (PostgreSQL, MySQL o SQLite).

- Endpoints:

  - POST /movies: Crear una nueva película.
    Recibe un objeto con: título, año, género, sinopsis, reparto (array de strings) e imagen (URL).
    Guarda los datos en la base de datos.
  - GET /movies: Consultar el listado de películas.
    Devuelve un array con los datos básicos de cada película (título, año, género, imagen).
  - GET /movies/:id: Ver el detalle de una película.
    Devuelve todos los datos de la película solicitada (título, año, género, sinopsis, reparto e imagen).

- Estructura de datos:
  Cada película deberá tener la siguiente estructura:

  ```json
  {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "genre": "Sci-Fi",
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "image": "https://example.com/inception.jpg"
  }
  ```

- Validaciones:
  Asegúrate de validar que todos los campos requeridos sean proporcionados.
  Maneja errores comunes (por ejemplo, al intentar consultar una película que no existe).

## Frontend

- Estructura:

  Usa el proyecto base suministrado en React para construir la UI.
  Configura una capa de servicios para conectar con los endpoints del backend.

- Requisitos funcionales:

  - Listado de películas:
    Muestra las películas en cards con la imagen, título y género.
    Al hacer clic en una card, debe mostrar el detalle de la película (navegación a un componente o vista de detalle).
  - Detalle de película:
    Muestra el resto de los datos: año, sinopsis, reparto, e imagen en un diseño claro.
  - Creación de películas:
    Implementa un formulario para agregar una nueva película.
    Envía los datos al backend utilizando el endpoint POST /movies.

- Estilo:

  Usa las dependencias ya incluidas en el proyecto base para los estilos (puedes usar CSS adicional si es necesario).
