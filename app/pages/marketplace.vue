<script setup>
const goToTask = () => {
  navigateTo("/tasks");
};

const marquee = [];
</script>

<template>
  <div class="w-full px-4 py-4">
    <div class="space-y-2 mb-4">
      <UMarquee :overlay="false">
        <div class="flex items-center gap-x-2">
          <img src="/images/games/1.webp" class="h-16 w-auto" />
          <img src="/images/games/2.webp" class="h-16 w-auto" />
          <img src="/images/games/3.webp" class="h-16 w-auto" />
          <img src="/images/games/4.webp" class="h-16 w-auto" />
          <img src="/images/games/5.webp" class="h-16 w-auto" />
          <img src="/images/games/6.webp" class="h-16 w-auto" />
          <img src="/images/games/7.webp" class="h-16 w-auto" />
          <img src="/images/games/8.webp" class="h-16 w-auto" />
          <img src="/images/games/9.webp" class="h-16 w-auto" />
          <img src="/images/games/10.webp" class="h-16 w-auto" />
          <img src="/images/games/11.webp" class="h-16 w-auto" />
          <img src="/images/games/12.webp" class="h-16 w-auto" />
          <img src="/images/games/13.webp" class="h-16 w-auto" />
          <img src="/images/games/14.webp" class="h-16 w-auto" />
          <img src="/images/games/15.webp" class="h-16 w-auto" />
          <img src="/images/games/16.webp" class="h-16 w-auto" />
          <img src="/images/games/17.webp" class="h-16 w-auto" />
          <img src="/images/games/18.webp" class="h-16 w-auto" />
          <img src="/images/games/19.webp" class="h-16 w-auto" />
          <img src="/images/games/20.webp" class="h-16 w-auto" />
        </div>
      </UMarquee>

      <UMarquee :overlay="false" reverse>
        <div class="flex items-center gap-x-2">
          <img src="/images/games/1.webp" class="h-16 w-auto" />
          <img src="/images/games/2.webp" class="h-16 w-auto" />
          <img src="/images/games/3.webp" class="h-16 w-auto" />
          <img src="/images/games/4.webp" class="h-16 w-auto" />
          <img src="/images/games/5.webp" class="h-16 w-auto" />
          <img src="/images/games/6.webp" class="h-16 w-auto" />
          <img src="/images/games/7.webp" class="h-16 w-auto" />
          <img src="/images/games/8.webp" class="h-16 w-auto" />
          <img src="/images/games/9.webp" class="h-16 w-auto" />
          <img src="/images/games/10.webp" class="h-16 w-auto" />
          <img src="/images/games/11.webp" class="h-16 w-auto" />
          <img src="/images/games/12.webp" class="h-16 w-auto" />
          <img src="/images/games/13.webp" class="h-16 w-auto" />
          <img src="/images/games/14.webp" class="h-16 w-auto" />
          <img src="/images/games/15.webp" class="h-16 w-auto" />
          <img src="/images/games/16.webp" class="h-16 w-auto" />
          <img src="/images/games/17.webp" class="h-16 w-auto" />
          <img src="/images/games/18.webp" class="h-16 w-auto" />
          <img src="/images/games/19.webp" class="h-16 w-auto" />
          <img src="/images/games/20.webp" class="h-16 w-auto" />
        </div>
      </UMarquee>
      <UMarquee :overlay="false">
        <div class="flex items-center gap-x-2">
          <img src="/images/games/1.webp" class="h-16 w-auto" />
          <img src="/images/games/2.webp" class="h-16 w-auto" />
          <img src="/images/games/3.webp" class="h-16 w-auto" />
          <img src="/images/games/4.webp" class="h-16 w-auto" />
          <img src="/images/games/5.webp" class="h-16 w-auto" />
          <img src="/images/games/6.webp" class="h-16 w-auto" />
          <img src="/images/games/7.webp" class="h-16 w-auto" />
          <img src="/images/games/8.webp" class="h-16 w-auto" />
          <img src="/images/games/9.webp" class="h-16 w-auto" />
          <img src="/images/games/10.webp" class="h-16 w-auto" />
          <img src="/images/games/11.webp" class="h-16 w-auto" />
          <img src="/images/games/12.webp" class="h-16 w-auto" />
          <img src="/images/games/13.webp" class="h-16 w-auto" />
          <img src="/images/games/14.webp" class="h-16 w-auto" />
          <img src="/images/games/15.webp" class="h-16 w-auto" />
          <img src="/images/games/16.webp" class="h-16 w-auto" />
          <img src="/images/games/17.webp" class="h-16 w-auto" />
          <img src="/images/games/18.webp" class="h-16 w-auto" />
          <img src="/images/games/19.webp" class="h-16 w-auto" />
          <img src="/images/games/20.webp" class="h-16 w-auto" />
        </div>
      </UMarquee>
    </div>

    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <div
          class="flex flex-col items-center justify-center px-4 py-2 border border-dashed border-primary rounded-xl w-full"
        >
          <UIcon
            name="i-lucide-chart-no-axes-combined"
            class="size-10 shrink-0"
          />
          <h4>Today's Earnings</h4>
          <span>₹ 0</span>
        </div>
        <div
          class="flex flex-col items-center justify-center px-4 py-2 border border-dashed border-primary rounded-xl w-full"
        >
          <UIcon name="i-lucide-wallet" class="size-10 shrink-0" />
          <h4>Your Wallet</h4>
          <span>₹ 0</span>
        </div>
      </div>

      <div class="bg-white/5 px-4 py-6 rounded-2xl">
        <div class="flex items-center justify-between">
          <h4 class="text-2xl font-semibold text-primary">Start</h4>
          <h4 class="text-2xl font-semibold text-primary">0/10</h4>
        </div>
        <div class="py-4">
          <button
            @click="goToTask()"
            type="button"
            class="bg-primary text-white px-4 py-2 rounded-full w-full"
          >
            Start
          </button>
        </div>
      </div>

      <div class="bg-white/5 px-4 py-6 rounded-2xl">
        <blockquote class="text-xs text-green-300">
          Assignment Notification ,<br />
          Intern: Monday to Sunday <br />
          Contract Work Hours: Monday to Saturday, 12:01 AM to 11:59 PM <br />
          For further assistance, please contact the Hiring Manager.
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
