<template>
  <section class="space-y-10 px-12 py-6">
    <div v-for="(message, index) in messages" :key="index">
      <Message :message-content="message" />
    </div>
  </section>
</template>

<script setup>
import { useMessagesStore } from "../store/messages";
import Message from "./Message.vue";

const { messages } = useMessagesStore();
</script>
