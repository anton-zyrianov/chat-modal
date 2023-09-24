<template>
  <div
    v-if="messageContent.type === 'student' || 'teacher'"
    class="flex gap-x-4 items-center"
    :class="messageContent.type === 'teacher' && 'flex-row-reverse'"
  >
    <div
      class="w-fit max-w-3xl py-3 px-2 text-left relative"
      :class="
        messageContent.type === 'student'
          ? 'bg-blue-500 text-white ml-auto'
          : 'bg-gray-200 mr-auto'
      "
    >
      <p class="pb-2">{{ messageContent.message }}</p>
      <p class="text-xs">{{ messageContent.date }}</p>
      <div
        class="absolute top-1/2 -translate-y-1/2"
        :class="
          messageContent.type === 'student'
            ? 'message-arrow-right -right-2'
            : 'message-arrow-left -left-2'
        "
      ></div>
    </div>
    <img
      :src="
        messageContent.type === 'student'
          ? routeImages.studentImage
          : routeImages.teacherImage
      "
      class="rounded-full w-7 h-7 object-cover"
      alt="User Avatar"
    />
  </div>
</template>

<script setup>
defineProps({
  messageContent: Object,
});

const routeImages = {
  teacherImage: "/src/assets/teacher.jpg",
  studentImage: "/src/assets/student.jpg",
};
</script>

<style scoped>
.message-arrow-left {
  @apply w-0 h-0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #e5e7eb;
}

.message-arrow-right {
  @apply w-0 h-0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #3b82f6;
}
</style>
