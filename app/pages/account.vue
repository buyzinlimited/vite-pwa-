<script setup>
const logout = async () => {
  await navigateTo("/auth/login");
};
</script>

<template>
  <div class="w-full space-y-4 px-4">
    <div class="py-8">
      <a
        class="w-full flex justify-between items-center gap-6 bg-white/5 p-4 rounded-xl"
      >
        <div class="flex justify-start items-center gap-3">
          <img src="/assets/images/account-img-1.png" alt="" />
          <div class="block">
            <p class="text-white font-semibold">DigitalNomad</p>
            <p class="text-white text-sm">Code: 767477</p>
          </div>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>
    </div>
    <div class="space-y-4">
      <h4 class="text-white font-semibold">Language and Localization</h4>
      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-languages" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">Language</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white">English</span>
          <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
        </div>
      </a>

      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-indian-rupee" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">Currency</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white">USD</span>
          <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
        </div>
      </a>
    </div>

    <div class="space-y-4">
      <h4 class="text-white font-semibold">Support</h4>
      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-headset" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">Help Center</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>

      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon
              name="i-lucide-circle-question-mark"
              class="size-5 text-primary"
            />
          </div>
          <p class="text-white font-semibold">Privacy Policy</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>
      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-at-sign" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">About Us</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>
    </div>

    <div class="space-y-4">
      <h4 class="text-white font-semibold">Social</h4>
      <a
        class="group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-send" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">Telegram</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </a>

      <button
        @click.prevent="logout"
        class="w-full group flex items-center justify-between border border-border rounded px-4 py-2.5"
      >
        <div class="flex justify-start items-center gap-3">
          <div
            class="p-2.5 bg-white/5 flex justify-center items-center rounded-full text-white text-xl"
          >
            <UIcon name="i-lucide-log-out" class="size-5 text-primary" />
          </div>
          <p class="text-white font-semibold">Logout</p>
        </div>
        <UIcon name="i-lucide-chevron-right" class="size-5 text-primary" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
