<script setup>
const logout = async () => {
  await navigateTo("/auth/login");
};
</script>

<template>
  <div class="w-full px-4 py-4">
    <div class="space-y-4 mb-4">
      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-body text-xl"
          >
            <UIcon name="i-lucide-languages" class="size-5 text-primary" />
          </div>
          <p class="text-body font-semibold">Language</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-body">English</span>
          <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
        </div>
      </a>

      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-body text-xl"
          >
            <UIcon name="i-lucide-indian-rupee" class="size-5 text-primary" />
          </div>
          <p class="text-body font-semibold">Currency</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-body">USD</span>
          <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
        </div>
      </a>

      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-xl"
          >
            <UIcon name="i-lucide-headset" class="size-5 text-primary" />
          </div>
          <p class="font-semibold">Help Center</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>

      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-xl"
          >
            <UIcon
              name="i-lucide-circle-question-mark"
              class="size-5 text-primary"
            />
          </div>
          <p class="font-semibold">Privacy Policy</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>
      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-xl"
          >
            <UIcon name="i-lucide-at-sign" class="size-5 text-primary" />
          </div>
          <p class="font-semibold">About Us</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>

      <a
        class="bg-white/2 group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-xl"
          >
            <UIcon name="i-lucide-send" class="size-5 text-primary" />
          </div>
          <p class="font-semibold">Telegram</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>

      <button
        @click.prevent="logout"
        class="bg-white/2 w-full group flex items-center justify-between rounded px-4 py-2"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-xl"
          >
            <UIcon name="i-lucide-log-out" class="size-5 text-primary" />
          </div>
          <p class="font-semibold">Logout</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
