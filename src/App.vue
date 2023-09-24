<template>
  <div class="fixed inset-0 flex flex-col gap-y-10 items-center justify-center">
    <h1 class="text-2xl font-base">Prueba Front-End isEazy</h1>

    <button
      @click="onOpenModal"
      class="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
    >
      Abrir chat
    </button>
  </div>
  <ChatModal :open-modal="isModalOpened" @close-modal="isModalOpened = false" />
</template>

<script setup>
import { ref } from "vue";
import ChatModal from "../src/components/ChatModal.vue";

const isModalOpened = ref(false);

const onOpenModal = () => {
  isModalOpened.value = !isModalOpened.value;
};
</script>
