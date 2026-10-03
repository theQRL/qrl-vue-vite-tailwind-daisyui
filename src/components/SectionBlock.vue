<template>
  <section :id="id" class="container-site scroll-mt-20 py-12">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="section-eyebrow">{{ eyebrow }}</p>
        <h2 class="section-heading mt-2">{{ title }}</h2>
      </div>
      <slot name="actions" />
    </div>
    <p v-if="blurb" class="mt-2 max-w-2xl text-base-content/60">{{ blurb }}</p>

    <div class="mt-8 grid items-start gap-5 md:grid-cols-2" :class="{ 'xl:grid-cols-3': !wide }">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  blurb: { type: String, default: '' },
  // Charts are dashboard cards; at three columns their in-bar labels overflow.
  wide: { type: Boolean, default: false },
});
</script>
