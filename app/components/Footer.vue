<script setup></script>

<template>
  <footer class="fixed left-0 right-0 bottom-0 z-30">
    <nav
      class="bg-background max-w-sm mx-auto py-4 flex justify-around items-center"
    >
      <div class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-house" class="size-5" />
        <p class="text-xs font-semibold">Home</p>
      </div>

      <a href="./browser.html" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-lightbulb" class="size-5" />
        <p class="text-xs font-semibold">Browser</p>
      </a>

      <a href="./marketplace.html" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-lightbulb" class="size-5" />
        <p class="text-xs font-semibold">Marketplace</p>
      </a>

      <a href="./account.html" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-lightbulb" class="size-5" />
        <p class="text-xs font-semibold">Account</p>
      </a>
    </nav>
  </footer>
</template>

<style scoped></style>
