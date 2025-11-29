<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: "Dialog" },
});

const emit = defineEmits(["update:modelValue"]);

const close = () => emit("update:modelValue", false);
</script>

<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black/50 z-40"
      @click="close"
    ></div>

    <div
      class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm z-50 transition-all duration-300"
      :class="modelValue ? 'translate-y-0' : 'translate-y-full'"
    >
      <div class="bg-background rounded-t-2xl">
        <header class="shadow-2xl flex justify-between items-center px-4 py-4">
          <h4 class="text-lg font-semibold text-body">{{ title }}</h4>
          <button
            type="button"
            @click="$emit('update:modelValue', false)"
            class="text-body hover:text-danger cursor-pointer"
          >
            <UIcon name="i-lucide-x" class="size-5" />
          </button>
        </header>
        <div class="px-4 py-4">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped></style>
