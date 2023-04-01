# Prueba técnica de desarrollo frontend con React, Typescript y consumo API de Spoonacular

Este repositorio contiene la prueba técnica realizada por Adrian Santamaria para el puesto de desarrollador frontend. La prueba consistió en consumir la API de Spoonacular para mostrar en una página web un listado de recetas aleatorias y su información asociada, todo esto desarrollado con React y Typescript.

## Tecnologías utilizadas
- React
- Typescript
- Axios (para el consumo de la API de Spoonacular)

## Instrucciones de instalación y uso
Para poder ejecutar este proyecto, es necesario contar con Node.js instalado en tu computadora. A continuación, sigue estos pasos:

1. Clona el repositorio a tu computadora con el siguiente comando en la terminal: 
    ```
    git clone https://github.com/<nombre-de-usuario>/prueba-tecnica-frontend-react.git
    ```
2. Entra al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:
    ```
    cd prueba-tecnica-frontend-react
    npm install
    ```
3. Crea un archivo .env en la raíz del proyecto y agrega la siguiente línea:
    ```
    REACT_APP_SPOONACULAR_API_KEY=<tu-clave-de-API-de-Spoonacular>
    ```
4. Ejecuta el siguiente comando para iniciar la aplicación:
    ```
    npm start
    ```

Esto iniciará la aplicación en http://localhost:3000. Abre esa dirección en tu navegador para ver la aplicación en funcionamiento.

## Estructura del proyecto
- `src/`: Contiene todo el código fuente del proyecto.
- `assets/`: Contiene las imágenes y otros recursos utilizados en la aplicación.
- `components/`: Contiene los componentes React utilizados en la aplicación.
- `styles/`: Contiene los estilos CSS utilizados en la aplicación.
- `App.tsx`: Componente principal de la aplicación.
- `index.tsx`: Punto de entrada de la aplicación.
- `public/`: Contiene los archivos públicos de la aplicación.

## Agradecimientos
Agradezco a la empresa por la oportunidad de realizar esta prueba técnica y por la posibilidad de demostrar mis habilidades en el desarrollo frontend.
