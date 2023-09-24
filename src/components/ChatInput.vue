<template>
  <form
    aria-label="Input field"
    @submit.prevent="postData"
    class="flex gap-x-5 py-5 px-12 items-center"
  >
    <div>
      <label for="role" class="sr-only"
        >Select role<span class="text-red-500">*</span></label
      >
      <select
        name="role"
        id="role"
        class="w-fit bg-transparent pr-2"
        v-model="role"
        required
      >
        <option value="student" selected>Estudiante</option>
        <option value="teacher">Profesor</option>
      </select>
    </div>

    <div class="w-full">
      <label for="message" class="sr-only">Message</label>

      <input
        type="text"
        class="bg-gray-200 border-gray-300 border stroke-1 h-8 rounded-full w-full"
        id="message"
        v-model="textMessage"
        required
      />
    </div>

    <div>
      <button
        class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-gray-500"
      >
        <img src="../assets/send-icon.svg" class="w-5" alt="Send Icon" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useMessagesStore } from "../store/messages";

const textMessage = ref();
const role = ref("student");

const messages = useMessagesStore();

const postData = () => {
  messages.addMessage(role.value, textMessage.value);
};
</script>
