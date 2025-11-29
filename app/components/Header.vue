<script setup>
const { locale } = useI18n();

const switchLang = () => {
  locale.value = locale.value === "en" ? "bn" : "en";
};
</script>

<template>
  <header
    class="bg-background max-w-sm mx-auto shadow-2xl px-4 py-4 sticky top-0 z-40"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/assets/images/account-img-1.png" alt="" />
        <div>
          <h4 class="text-base font-semibold">{{ $t("hello") }}, Mahim</h4>
          <span class="text-xs">Code: 758894</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="switchLang"
          class="flex justify-center items-center text-xl p-2 text-primary rounded-full bg-white/5"
        >
          <UIcon name="i-lucide-languages" class="size-5" />
        </button>

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
