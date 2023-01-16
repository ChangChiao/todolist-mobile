<script setup>
const props = defineProps({
  todoItem: Object,
});

const emit = defineEmits(["deleteItem", "editItem"]);
</script>

<template>
  <div class="flex items-cente p-2 rounded-lg mb-2 bg-slate-100">
    <div
      @click="() => emit('editItem', todoItem.timeStamp)"
      :class="[
        'rounded-full w-10 h-10 border-slate-500 border-2 cursor-pointer',
        todoItem.status && 'bg-slate-700',
      ]"
    ></div>
    <div class="pl-4 w-3/4">
      <h3 class="text-lg">{{ todoItem.title }}</h3>
      <p>{{ todoItem.content }}</p>
    </div>
    <div
      class="cursor-pointer"
      @click="() => emit('deleteItem', todoItem.timeStamp)"
    >
      delete
    </div>
  </div>
</template>
