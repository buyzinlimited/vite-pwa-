<script setup></script>

<template>
  <div class="bg-background max-w-sm mx-auto">
    <Header />

    <main class="w-full overflow-y-auto px-4">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
