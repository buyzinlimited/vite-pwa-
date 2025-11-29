<!-- footer.vue -->
<script setup></script>

<template>
  <footer
    class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-background/95 backdrop-blur py-2.5 z-50"
  >
    <nav class="flex justify-around items-center">
      <NuxtLink
        to="/"
        active-class="text-primary"
        exact-active-class="text-primary"
        class="flex flex-col items-center gap-1"
      >
        <UIcon name="i-lucide-house" class="size-5 text-primary" />
        <h4 class="text-xs font-semibold">Home</h4>
      </NuxtLink>

      <NuxtLink
        to="/marketplace"
        active-class="text-primary"
        exact-active-class="text-primary"
        class="flex flex-col items-center gap-1"
      >
        <UIcon name="i-lucide-gift" class="size-5 text-primary" />
        <h4 class="text-xs font-semibold">Marketplace</h4>
      </NuxtLink>

      <NuxtLink
        to="/teams"
        active-class="text-primary"
        exact-active-class="text-primary"
        class="flex flex-col items-center gap-1"
      >
        <UIcon name="i-lucide-component" class="size-5 text-primary" />
        <h4 class="text-xs font-semibold">Teams</h4>
      </NuxtLink>

      <NuxtLink
        to="/account"
        active-class="text-primary"
        exact-active-class="text-primary"
        class="flex flex-col items-center gap-1"
      >
        <UIcon name="i-lucide-user-round" class="size-5 text-primary" />
        <h4 class="text-xs font-semibold">Account</h4>
      </NuxtLink>
    </nav>
  </footer>
</template>

<style scoped></style>
