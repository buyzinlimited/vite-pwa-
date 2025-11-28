<script setup>
definePageMeta({
  layout: "auth",
});

const login = async () => {
  await navigateTo("/");
};
</script>

<template>
  <div class="w-full space-y-6 px-4 pb-10">
    <!-- Title -->
    <div class="flex justify-center items-center flex-col gap-3 pt-8">
      <h1 class="text-2xl font-semibold">Create Your Account</h1>
      <p class="text-sm text-center">
        Register now and start earning referral bonus instantly.
      </p>
    </div>

    <form @submit.prevent="login">
      <div class="group mb-3">
        <label class="text-sm font-semibold mb-3">Name</label>

        <div class="relative">
          <input
            type="text"
            placeholder="Enter your phone"
            class="bg-transparent px-4 py-2.5 pr-12 border border-white/10 rounded focus:border-primary outline-none w-full text-sm text-primary transition"
          />

          <UIcon
            name="i-lucide-user-round"
            class="size-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      <div class="group mb-3">
        <label class="text-sm font-semibold mb-3">Phone Number</label>

        <div class="relative">
          <input
            type="text"
            placeholder="Enter your phone"
            class="bg-transparent px-4 py-2.5 pr-12 border border-white/10 rounded focus:border-primary outline-none w-full text-sm text-primary transition"
          />

          <UIcon
            name="i-lucide-phone"
            class="size-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      <div class="group mb-3">
        <label class="text-sm font-semibold mb-3">Password</label>

        <div class="relative">
          <input
            type="password"
            placeholder="********"
            class="bg-transparent px-4 py-2.5 pr-12 border border-white/10 rounded focus:border-primary outline-none w-full text-sm text-primary transition"
          />

          <UIcon
            name="i-lucide-eye"
            class="size-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <p class="text-xs text-gray-400 text-end">At least 8 characters</p>
      </div>

      <div class="group mb-3">
        <label class="text-sm font-semibold mb-3">Referral Code</label>

        <div class="relative">
          <input
            type="text"
            placeholder="Enter ref code"
            class="bg-transparent px-4 py-2.5 pr-12 border border-white/10 rounded focus:border-primary outline-none w-full text-sm text-primary transition"
          />

          <UIcon
            name="i-lucide-eye"
            class="size-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <p class="text-xs text-end">
          Referral bonus will be applied automatically.
        </p>
      </div>

      <p class="pt-3 text-xs leading-relaxed mb-3">
        By creating an account, you agree to our
        <a href="#" class="text-white underline">Terms & Conditions</a>.
      </p>

      <button
        type="submit"
        class="w-full bg-primary text-white font-semibold text-center py-3 rounded-lg"
      >
        Register
      </button>
    </form>
  </div>
</template>
