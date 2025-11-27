<!-- header.vue -->
<script setup></script>

<template>
  <header
    class="bg-background max-w-sm mx-auto px-4 py-4 sticky top-0 z-40 backdrop-blur"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/assets/images/account-img-1.png" alt="" />
        <div class="block">
          <h4 class="text-base font-semibold">Hello, Mahim</h4>
          <span class="text-xs">Code: 758894</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <a
          class="flex justify-center items-center text-xl p-2 text-primary rounded-full bg-white/5"
        >
          <UIcon name="i-lucide-fullscreen" class="size-5" />
        </a>

        <a
          href="/"
          class="flex justify-center items-center text-xl p-2 text-primary rounded-full bg-white/5"
        >
          <UIcon name="i-lucide-bell" class="size-5" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
