<template>
  <TemplateFile
    v-if="messageContent.type === 'delivery'"
    :message-content="messageContent"
  />

  <TemplateMessage
    v-else-if="messageContent.type === 'student' || 'teacher'"
    :message-content="messageContent"
  />
</template>

<script setup>
import TemplateFile from "./TemplateFile.vue";
import TemplateMessage from "./TemplateMessage.vue";

defineProps({
  messageContent: Object,
});
</script>
