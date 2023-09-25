<template>
  <div
    :class="messageContent.id !== 1 && 'border-t'"
    class="text-left space-y-4 border-b border-black/10 flex justify-between items-center py-4 px-4"
  >
    <div class="space-y-1">
      <p class="font-medium">{{ messageContent.version }}</p>
      <p class="font-bold text-blue-500">{{ messageContent.name }}</p>
      <div class="flex md:space-x-4 max-md:flex-col max-md:text-sm">
        <p>{{ messageContent.format }}</p>
        <p class="uppercase">({{ messageContent.size }})</p>
        <p>{{ messageContent.date }}</p>
      </div>
    </div>
    <button @click="onDownloadFile">
      <img
        src="../assets/download-icon.svg"
        class="svg-icons"
        alt="Download Icon"
      />
    </button>
  </div>
</template>

<script setup>
import axios from "axios";

defineProps({
  messageContent: Object,
});

const onDownloadFile = () => {
  axios({
    url: `${
      import.meta.env.VITE_BASE_LINK
    }/src/assets/prueba-desarrollo-front-end.pdf`,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");

    link.href = fileUrl;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);

    link.click();
  });
};
</script>
