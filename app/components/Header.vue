<script setup></script>

<template>
  <header class="bg-background max-w-sm mx-auto px-4 py-4 sticky top-0 z-40">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/assets/images/account-img-1.png" alt="" />
        <p class="text-sm">Hello, TechWhiz</p>
      </div>

      <div class="flex items-center gap-2">
        <a class="p-2 text-g300 rounded-full bg-white bg-opacity-5">
          <UIcon name="i-lucide-fullscreen" class="size-5" />
        </a>

        <a
          href="./notification.html"
          class="p-2 text-g300 rounded-full bg-white bg-opacity-5"
        >
          <UIcon name="i-lucide-bell" class="size-5" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
