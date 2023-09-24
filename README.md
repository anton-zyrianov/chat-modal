![Descripción de la imagen](https://i.ibb.co/0rkQb5Z/Captura-de-pantalla-2023-09-25-a-las-0-16-58.png)

# Prueba desarrollo Front-End isEazy

1. Para poder correr la aplicación en el local lo primero de todo hay que hacer `git clone` de la rama.
2. Una vez bajado el proyecto, se han de instalar todas las dependencias con `npm i`.
3. El segundo paso es crear el arhivo `.env` indicando BASE_LINK con el puerto.
4. Una vez hecho este paso, se utilzia `npm run dev` para correr la aplicación.

La prueba está disponible online utilizando Vercel - [enlace](https://chat-modal.vercel.app/)

## Tecnologías utilizadas:

- Vue 3
- Vite
- Pinia
- TailwindCSS

Además, se ha utilizado **Prettier** y **ESLint** para formateo del código y **HeadlessUI** como base para el modal, ya que el ejercicio consistía en contruir un pop-up ya abierto y de esta menera, se ha conseguido un modal totalmente accesible. Por último, se utilizó la librería **axios** para poder ejecutar la funcionalidad de descargar el archivo PDF.

Se puede enviar los mensajes tanto por parte del profesor, como del alumno. Para ello, primero hay que escoger el rol y a continuación, escribir el cuerpo del mensaje. Estos mensajes se irán almacenando en el array correspondiente. Debido a que la app no está conectada a ningún servidor, una vez actualizada la página, toda la información nueva se pierde.
