<script setup>
const { locales, setLocale } = useI18n();

const switchLang = () => {
  locale.value = locale.value === "en" ? "bn" : "en";
};
</script>

<template>
  <div class="w-full space-y-4 px-4">
    <!-- Balance Section -->
    <div class="space-y-2">
      <p class="text-n70 text-sm">Your available balance</p>

      <div class="flex items-center gap-3">
        <img src="/assets/images/1INCH_icon.png" class="size-8" alt="" />
        <p class="text-3xl font-bold text-white">0.180</p>
      </div>

      <p class="text-sm text-n70">
        <span class="text-g300">$</span>210.44 (USD)
      </p>
    </div>

    <div class="flex items-center gap-4">
      <a
        href="/"
        class="px-4 py-2 border border-dashed border-primary rounded-xl w-full flex justify-center items-center gap-3 text-white font-medium"
      >
        <span
          class="flex justify-center items-center p-2 text-white bg-primary rounded-full"
          ><UIcon name="i-lucide-upload" class="size-6"
        /></span>
        Deposit
      </a>
      <a
        href="/"
        class="px-4 py-2 border border-dashed border-primary rounded-xl w-full flex justify-center items-center gap-3 text-white font-medium"
      >
        <span
          class="flex justify-center items-center p-2 text-white bg-primary rounded-full"
        >
          <UIcon name="i-lucide-download" class="size-6" />
        </span>
        Withdraw
      </a>
    </div>

    <!-- <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>

    <h1>{{ $t("balance") }}</h1> -->

    <!-- Invite Banner -->
    <div
      class="relative bg-green-300/10 p-5 rounded-xl overflow-hidden flex justify-between items-center"
    >
      <img
        src="/assets/images/invite_bg.png"
        class="absolute right-0 top-0 h-full opacity-80"
      />

      <div class="max-w-xs space-y-2">
        <p class="text-lg text-white font-semibold leading-tight">
          Invite friends & get <span class="text-primary">$</span>20
        </p>
        <p class="text-xs text-white">
          This section can be used as an Advertisement or a Call to Action
        </p>
      </div>

      <img src="/assets/images/invite_img.png" class="w-20" />
    </div>

    <!-- Top Gainers -->
    <div class="">
      <div class="flex justify-between items-center">
        <p class="text-xl text-white font-semibold">Top Gainers</p>
        <a href="./top-gainers.html" class="text-sm text-primary">View All</a>
      </div>

      <div class="py-6 space-y-4">
        <!-- Item -->
        <div
          v-for="value in 5"
          class="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl"
        >
          <div class="flex justify-start items-center gap-2">
            <div
              class="text-primary flex justify-center items-center rounded-full text-xl bg-white/5"
            >
              <img
                src="/assets/images/logo.png"
                alt="level"
                class="size-12 object-cover"
              />
            </div>

            <div class="text-sm">
              <div class="space-x-2">
                <span class="text-white">20.00</span>
                <span>/Each Order</span>
              </div>
              <div class="space-x-2">
                <span class="text-white">Daily Tasks: </span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <p class="text-white font-semibold">$5000</p>
            <p class="text-sm text-primary">3000</p>

            <button
              type="button"
              class="bg-primary text-white px-2 py-0.5 rounded-full text-xs"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
