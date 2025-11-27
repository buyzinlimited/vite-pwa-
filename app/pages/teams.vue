<script setup></script>

<template>
  <div class="w-full px-4 py-4">
    <!-- Invite Banner -->
    <div
      class="relative bg-green-300/10 p-4 rounded-xl overflow-hidden flex justify-between items-center"
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

    <div class="py-4 space-y-4">
      <h3 class="text-primary text-base font-semibold">Referral List (10)</h3>
      <div
        v-for="value in 10"
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
            <span class="text-white">Super Matino - Adventure Game</span>
            <div class="space-x-2">
              <span class="text-white">Daily Tasks: </span>
              <span class="text-primary">10</span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <p class="text-white font-semibold">$500</p>
          <button
            type="button"
            class="bg-primary text-white px-4 py-0.5 rounded-full text-xs"
          >
            Click
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
