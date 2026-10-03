<template>
  <div>
    <h3 class="mb-4 font-mono text-xs tracking-wider text-base-content/50 uppercase">
      {{ label }}
    </h3>
    <!-- Restyles ApexCharts' own tooltip DOM with daisyUI tokens. Every chart
         needs the identical set, so it lives here once. -->
    <div
      class="w-full [&_.apexcharts-xaxistooltip]:rounded-field! [&_.apexcharts-xaxistooltip]:border-none! [&_.apexcharts-xaxistooltip]:bg-base-200! [&_.apexcharts-xaxistooltip]:text-base-content! [&_.apexcharts-xaxistooltip]:shadow-lg! [&_.apexcharts-xaxistooltip-bottom:after]:border-b-base-200! [&_.apexcharts-xaxistooltip-bottom:before]:border-b-base-200! [&_.apexcharts-tooltip]:rounded-box! [&_.apexcharts-tooltip]:border-base-content/5! [&_.apexcharts-tooltip]:bg-base-200! [&_.apexcharts-tooltip]:shadow-xl! [&_.apexcharts-svg]:outline-none"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
});
</script>
