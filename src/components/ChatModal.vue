<template>
  <TransitionRoot appear :show="openModal" as="template">
    <Dialog
      as="div"
      @close="$emit('close-modal')"
      class="relative z-10"
      aria-modal="true"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-70" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-scroll">
        <div class="flex min-h-fit items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full transform overflow-hidden rounded-md bg-white shadow-xl transition-all"
            >
              <DialogTitle class="px-5 py-4 border-b-2 border-black">
                <div class="flex">
                  <h2 class="mx-auto text-lg font-medium text-gray-700">
                    Comentarios
                  </h2>
                  <img
                    src="../assets/close-icon.svg"
                    class="svg-icons"
                    alt="Close Icon"
                    @click="$emit('close-modal')"
                  />
                </div>
              </DialogTitle>

              <div class="h-[calc(100vh-12rem)] overflow-y-auto">
                <ChatMessages />
              </div>

              <ChatInput class="border-t border-black/10" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import ChatMessages from "../components/ChatMessages.vue";
import ChatInput from "../components/ChatInput.vue";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

defineProps({
  openModal: Boolean,
});

defineEmits(["close-modal"]);

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
</script>
