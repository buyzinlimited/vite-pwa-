<script setup></script>

<template>
  <div class="relative z-20 w-full">
    <div class="w-full">
      <p class="text-n70 text-sm">Your available balance</p>
      <div class="flex justify-start items-center gap-2">
        <img src="./assets/images/1INCH_icon.png" alt="" />
        <p class="text-3xl font-bold text-white relative">0.180</p>
      </div>
      <p class="text-sm text-n70">
        <span class="text-g300">$</span>210.44 (USD)
      </p>

      <div class="my-6 w-full border border-border border-dashed"></div>

      <div class="flex justify-around items-center">
        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300"
          >
            <UIcon name="i-lucide-send" class="size-5" />
          </div>
          <p class="text-white font-semibold text-sm">Send</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300"
          >
            <UIcon name="i-lucide-folder-down" class="size-5" />
          </div>
          <p class="text-white font-semibold text-sm">Receive</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300"
          >
            <UIcon name="i-lucide-arrow-down-up" class="size-5" />
          </div>
          <p class="text-white font-semibold text-sm">Swap</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300"
          >
            <UIcon name="i-lucide-arrow-left-right" class="size-5" />
          </div>
          <p class="text-white font-semibold text-sm">Buy & Sell</p>
        </a>
      </div>
    </div>

    <div
      class="w-full bg-green-300/40 p-5 flex justify-between items-center rounded-xl bg-opacity-20 relative overflow-hidden"
    >
      <img
        src="/assets/images/invite_bg.png"
        alt=""
        class="absolute top-0 right-0 bottom-0 h-full"
      />

      <div class="max-w-[200px]">
        <p class="text-xl font-semibold">
          Invite friends & get <span class="text-g300">$</span>20
        </p>
        <p class="text-n70 pt-4 text-xs">
          This section can be used as an Advertisement or a Call to Action
        </p>
      </div>

      <img src="/assets/images/invite_img.png" alt="" />
    </div>

    <div class="px-6 pt-8">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">Top Gainers</p>
        <a href="./top-gainers.html" class="text-sm text-g300">View All</a>
      </div>
      <div class="flex flex-col gap-2 pt-5">
        <div
          class="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl"
        >
          <div class="flex justify-start items-center gap-2">
            <p class="text-sm text-n70">#01</p>
            <div
              class="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5"
            >
              <img src="./assets/images/Ethereum_ETH.png" alt="" />
            </div>
            <p class="font-semibold">Ethereum</p>
          </div>
          <div class="flex flex-col justify-end items-end">
            <p class="font-semibold">$0.272889</p>
            <p class="text-g300 text-sm">+8.00%</p>
          </div>
        </div>
        <div
          class="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl"
        >
          <div class="flex justify-start items-center gap-2">
            <p class="text-sm text-n70">#02</p>
            <div
              class="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5"
            >
              <img src="./assets/images/Bitcoin_icon.png" alt="" />
            </div>
            <p class="font-semibold">Bitcoin</p>
          </div>
          <div class="flex flex-col justify-end items-end">
            <p class="font-semibold">$0.432586</p>
            <p class="text-g300 text-sm">+3.00%</p>
          </div>
        </div>
        <div
          class="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl"
        >
          <div class="flex justify-start items-center gap-2">
            <p class="text-sm text-n70">#03</p>
            <div
              class="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5"
            >
              <img src="./assets/images/Litecoin.png" alt="" />
            </div>
            <p class="font-semibold">Litecoin</p>
          </div>
          <div class="flex flex-col justify-end items-end">
            <p class="font-semibold">$0.692657</p>
            <p class="text-g300 text-sm">+2.00%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
