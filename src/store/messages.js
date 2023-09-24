import { defineStore } from "pinia";

export const useMessagesStore = defineStore("message", {
  state: () => ({
    messages: [
      {
        id: 1,
        type: "delivery",
        version: "Version 1",
        name: "Título del archivo a subir 2",
        format: "Documento/PDF",
        size: "3.8 mb",
        date: "28 dic 2018 / 14:45",
      },
      {
        id: 2,
        type: "student",
        message:
          "Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.",
        date: "28 dic 2018 / 14:45",
      },
      {
        id: 3,
        type: "teacher",
        message:
          "Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.",
        date: "29 dic 2018 / 10:11",
      },
      {
        id: 4,
        type: "delivery",
        version: "Version 2",
        name: "Título del archivo a subir 2",
        format: "Documento/PDF",
        size: "4.8 mb",
        date: "30 dic 2018 / 8:22",
      },
      {
        id: 5,
        type: "student",
        message: "Realizados los cambios según feedback.",
        date: "30 dic 2018 / 8:22",
      },
      {
        id: 6,
        type: "teacher",
        message: "Perfecto, excelente trabajo.",
        date: "30 dic 2018 / 15:25",
      },
    ],
  }),

  actions: {
    addMessage(role, message) {
      const getDate = new Date();

      const date = getDate.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const hours = getDate.getHours();
      const minutes =
        getDate.getMinutes() < 10
          ? "0" + getDate.getMinutes()
          : getDate.getMinutes();

      this.messages.push({
        id: this.messages.length + 1,
        type: role,
        message: message,
        date: `${date} / ${hours}:${minutes}`,
      });
    },
  },
});
