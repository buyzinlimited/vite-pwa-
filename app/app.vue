<script setup lang="ts">
import { main } from "#build/ui";
</script>

<template>
  <header class="bg-background max-w-sm mx-auto px-4 py-4 sticky top-0 z-40">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/assets/images/account-img-1.png" alt="" />
        <p class="text-sm">Hello, TechWhiz</p>
      </div>

      <div class="flex items-center gap-2">
        <a
          class="flex justify-center items-center text-xl p-2 text-primary rounded-full bg-white/5"
        >
          <UIcon name="i-lucide-fullscreen" class="size-5" />
        </a>

        <a
          href="/"
          class="flex justify-center items-center text-xl p-2 text-primary rounded-full bg-white/5"
        >
          <UIcon name="i-lucide-bell" class="size-5" />
        </a>
      </div>
    </div>
  </header>

  <main class="bg-background max-w-sm mx-auto relative z-20 w-full pb-6">
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

      <div class="border border-border border-dashed"></div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-4 gap-4 text-center">
        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white/5 rounded-full text-primary"
          >
            <UIcon name="i-lucide-send" class="size-5" />
          </div>
          <p class="text-sm text-white font-semibold">Send</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white/5 rounded-full text-primary"
          >
            <UIcon name="i-lucide-folder-down" class="size-5" />
          </div>
          <p class="text-sm text-white font-semibold">Receive</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white/5 rounded-full text-primary"
          >
            <UIcon name="i-lucide-arrow-down-up" class="size-5" />
          </div>
          <p class="text-sm text-white font-semibold">Swap</p>
        </a>

        <a href="/" class="flex flex-col justify-center items-center gap-2">
          <div
            class="flex justify-center items-center p-4 text-xl bg-white/5 rounded-full text-primary"
          >
            <UIcon name="i-lucide-arrow-left-right" class="size-5" />
          </div>
          <p class="text-sm text-white font-semibold">Buy & Sell</p>
        </a>
      </div>

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
      <div class="pt-4 pb-16">
        <div class="flex justify-between items-center">
          <p class="text-xl text-white font-semibold">Top Gainers</p>
          <a href="./top-gainers.html" class="text-sm text-primary">View All</a>
        </div>

        <div class="flex flex-col gap-2 pt-4">
          <!-- Item -->
          <div
            class="flex justify-between items-center bg-white/5 p-4 rounded-xl"
          >
            <div class="flex justify-start items-center gap-2">
              <p class="text-sm text-white">#01</p>
              <div
                class="text-primary flex justify-center items-center size-10 rounded-full text-xl bg-white/5"
              >
                <img src="/assets/images/Ethereum_ETH.png" alt="" />
              </div>

              <p class="text-white font-semibold">Ethereum</p>
            </div>
            <div class="text-right">
              <p class="text-white font-semibold">$0.272889</p>
              <p class="text-sm text-primary">+8.00%</p>
            </div>
          </div>

          <!-- Item -->
          <div
            class="flex justify-between items-center bg-white/5 p-4 rounded-xl"
          >
            <div class="flex items-center gap-3">
              <p class="text-sm text-white">#02</p>
              <div
                class="text-primary flex justify-center items-center size-10 rounded-full text-xl bg-white/5"
              >
                <img src="/assets/images/Bitcoin_icon.png" alt="" />
              </div>
              <p class="text-white font-semibold">Bitcoin</p>
            </div>
            <div class="text-right">
              <p class="text-white font-semibold">$0.432586</p>
              <p class="text-sm text-primary">+3.00%</p>
            </div>
          </div>

          <!-- Item -->
          <div
            class="flex justify-between items-center bg-white/5 p-4 rounded-xl"
          >
            <div class="flex items-center gap-3">
              <p class="text-sm text-white">#03</p>
              <div
                class="text-primary flex justify-center items-center size-10 rounded-full text-xl bg-white/5"
              >
                <img src="/assets/images/Litecoin.png" alt="" />
              </div>
              <p class="text-white font-semibold">Litecoin</p>
            </div>
            <div class="text-right">
              <p class="text-white font-semibold">$0.692657</p>
              <p class="text-sm text-primary">+2.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="fixed left-0 right-0 bottom-0 z-30">
    <nav
      class="bg-background max-w-sm mx-auto py-4 flex justify-around items-center"
    >
      <NuxtLink to="/" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-house" class="size-5 text-primary" />
        <h4 class="text-white text-xs font-semibold">Home</h4>
      </NuxtLink>

      <NuxtLink href="/" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-lightbulb" class="size-5 text-primary" />
        <h4 class="text-white text-xs font-semibold">Browser</h4>
      </NuxtLink>

      <NuxtLink href="/" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-lightbulb" class="size-5 text-primary" />
        <h4 class="text-white text-xs font-semibold">Marketplace</h4>
      </NuxtLink>

      <NuxtLink href="/" class="flex flex-col items-center gap-1">
        <UIcon name="i-lucide-user-round" class="size-5 text-primary" />
        <h4 class="text-white text-xs font-semibold">Account</h4>
      </NuxtLink>
    </nav>
  </footer>
</template>
