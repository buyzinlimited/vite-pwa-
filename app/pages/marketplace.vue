<script setup>
const goToTask = () => {
  navigateTo("/tasks");
};
</script>

<template>
  <div class="w-full px-4 py-4">
    <div class="py-4 space-y-4">
      <UMarquee :overlay="false">
        <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
      </UMarquee>
      <UMarquee :overlay="false" reverse>
        <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
      </UMarquee>
      <UMarquee :overlay="false">
        <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
      </UMarquee>
      <UMarquee :overlay="false" reverse>
        <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
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
          <h4>Today's Earnings</h4>
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
