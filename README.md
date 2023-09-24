![Descripción de la imagen](https://i.ibb.co/0rkQb5Z/Captura-de-pantalla-2023-09-25-a-las-0-16-58.png)

# Prueba desarrollo Front-End isEazy

1. Para poder correr la aplicación en el local lo primero de todo hay que hacer `git clone` de la rama.
2. Una vez bajado el proyecto, se han de instalar todas las dependencias con `npm i`.
3. El tercer paso es crear el arhivo `.env` indicando VITE_BASE_LINK con el puerto.
4. Una vez hecho este paso, se utilza `npm run dev -- --port=5173` para correr la aplicación en el puerto 5173 o en el caso de usar otro puerto cambiar el archivo `.env`.

## Tecnologías utilizadas:

- Vue 3
- Vite
- Pinia
- TailwindCSS

Además, se ha utilizado **Prettier** y **ESLint** para formateo del código y **HeadlessUI** como base para el modal, ya que el ejercicio consistía en contruir un pop-up ya abierto y de esta menera, se ha conseguido un modal totalmente accesible. Por último, se utilizó la librería **axios** para poder ejecutar la funcionalidad de descargar el archivo PDF.

Se puede enviar los mensajes tanto por parte del profesor, como del alumno. Para ello, primero hay que escoger el rol y a continuación, escribir el cuerpo del mensaje. Estos mensajes se irán almacenando en el array correspondiente. Debido a que la app no está conectada a ningún servidor, una vez actualizada la página, toda la información nueva se pierde.
