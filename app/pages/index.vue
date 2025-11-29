<script setup>
const depositDialog = ref(false);
const withdrawDialog = ref(false);

const deposit = reactive({
  amount: 0,
  payment_method: "",
  trx_id: "",
});
const withdraw = reactive({
  amount: 0,
  payment_method: "",
  account: "",
});

const paymentMethods = [
  { label: "Bkash", value: "bkash" },
  { label: "Nagad", value: "nagad" },
  { label: "Rocket", value: "rocket" },
  { label: "Upay", value: "upay" },
];
</script>

<template>
  <div class="w-full px-4 py-4">
    <div class="space-y-2 py-2">
      <p class="text-body text-sm">{{ $t("balance") }}</p>

      <div class="flex items-center gap-3">
        <img src="/assets/images/1INCH_icon.png" class="size-8" alt="" />
        <p class="text-3xl font-bold text-white">0.180</p>
      </div>

      <p class="text-sm text-n70">
        <span class="text-g300">$</span>210.44 (USD)
      </p>
    </div>

    <div class="flex items-center gap-4 py-4">
      <button
        type="button"
        @click="depositDialog = true"
        class="px-4 py-2 border border-dashed border-primary rounded-xl w-full flex justify-center items-center gap-3 text-white font-medium"
      >
        <span
          class="flex justify-center items-center p-3 text-primary bg-white/5 rounded-full"
          ><UIcon name="i-lucide-upload" class="size-5"
        /></span>
        Deposit
      </button>

      <button
        type="button"
        @click="withdrawDialog = true"
        class="px-4 py-2 border border-dashed border-primary rounded-xl w-full flex justify-center items-center gap-3 text-white font-medium"
      >
        <span
          class="flex justify-center items-center p-3 text-primary bg-white/5 rounded-full"
        >
          <UIcon name="i-lucide-download" class="size-5" />
        </span>
        Withdraw
      </button>
    </div>

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

    <div class="py-4">
      <div class="flex justify-between items-center">
        <p class="text-xl text-white font-semibold">Today's Package</p>
        <NuxtLink to="/" class="text-sm text-primary">View All</NuxtLink>
      </div>

      <div class="py-4 space-y-4">
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
                class="size-14 object-cover rounded"
              />
            </div>

            <div class="text-xs leading-relaxed">
              <div class="space-x-2">
                <span class="text-body font-medium">Package:</span>
                <span class="text-primary">Premium</span>
              </div>

              <div class="space-x-2">
                <span class="text-body font-medium">Validity:</span>
                <span class="text-primary">30 Days</span>
              </div>

              <div class="space-x-2">
                <span class="text-body font-medium">Daily Tasks:</span>
                <span class="text-primary">10</span>
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

  <!-- Deposit Dialog -->
  <BaseBottomSheet v-model="depositDialog" title="Deposit">
    <template #body>
      <form @submit.prevent="" class="space-y-4">
        <input
          type="text"
          v-model="deposit.amount"
          placeholder="Enter Amount"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm"
        />

        <select
          v-model="deposit.payment_method"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm appearance-none"
        >
          <option value="" disabled>Select Method</option>
          <option :value="method.value" v-for="method in paymentMethods">
            {{ method.label }}
          </option>
        </select>

        <input
          type="text"
          v-model="deposit.trx_id"
          placeholder="Enter TRX ID"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm"
        />

        <BaseButton class="w-full">Confirm Deposit</BaseButton>
      </form>
    </template>
  </BaseBottomSheet>

  <!-- Withdraw Dialog -->
  <BaseBottomSheet v-model="withdrawDialog" title="Withdraw">
    <template #body>
      <form @submit.prevent="" class="space-y-4">
        <input
          type="text"
          v-model="withdraw.amount"
          placeholder="Enter Amount"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm"
        />

        <select
          v-model="withdraw.payment_method"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm appearance-none"
        >
          <option value="" disabled>Select Method</option>
          <option :value="method.value" v-for="method in paymentMethods">
            {{ method.label }}
          </option>
        </select>

        <input
          type="text"
          v-model="withdraw.account"
          placeholder="Enter account number"
          class="w-full bg-white/5 px-4 py-3 rounded-lg outline-none text-sm"
        />

        <BaseButton class="w-full">Confirm Withdraw</BaseButton>
      </form>
    </template>
  </BaseBottomSheet>
</template>
