<script setup>
definePageMeta({
  layout: "auth",
});

const login = async () => {
  await navigateTo("/");
};

const form = reactive({
  phone: "",
  password: "",
  captcha_key: "",
  captcha_value: "",
});

const { captcha, loadCaptcha } = useCaptcha();

const refresh = () => loadCaptcha();

onMounted(async () => {
  await loadCaptcha();
  form.captcha_key = captcha.value.key;
});
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
      </div>

      <div class="space-y-4">
        <div class="relative">
          <input
            v-model="form.captcha_value"
            type="text"
            placeholder="Please Enter Verification Code"
            class="w-full bg-white/5 border border-white/10 px-4 py-2.5 rounded text-sm text-white placeholder:text-sm"
          />

          <img
            v-if="captcha?.image"
            :src="captcha.image"
            @click="refresh"
            class="h-10 rounded absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white font-semibold text-center py-3 rounded-lg"
      >
        Sign In
      </button>
    </form>
  </div>
</template>
