<template>
  <div class="h-full rounded-box border border-base-300 bg-base-100 p-5">
    <h3 class="mb-4 font-mono text-xs tracking-wider text-base-content/50 uppercase">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>
