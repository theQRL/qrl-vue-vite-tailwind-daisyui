<template>
  <ChartTile label="Pie / donut">
    <div
      class="flex h-120 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7"
    >
      <div class="mb-2 flex items-start justify-between gap-4">
        <div>
          <h4 class="text-sm font-semibold text-base-content/50">Total Revenue</h4>
          <div class="flex items-center gap-2">
            <p class="text-2xl font-semibold text-base-content">$45,864</p>
            <span class="mt-1 text-xs font-semibold text-success">+ 10%</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2">
        <div ref="chartElement" :id="chartId" class="w-full"></div>

        <div class="flex w-full flex-col gap-3">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="flex items-center justify-between gap-3 rounded-box border border-base-content/10 bg-base-100 px-4 py-2"
          >
            <div class="flex flex-col">
              <p class="text-xs font-semibold text-base-content">{{ plan.name }}</p>
              <p class="text-xs text-base-content/40">{{ plan.value }}</p>
            </div>
            <span
              class="shrink-0 rounded-selector border border-base-content/10 bg-base-100 px-2 py-1 text-xs font-bold text-base-content"
              >{{ plan.share }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </ChartTile>
</template>

<script setup>
import { useId } from 'vue';
import ChartTile from './ChartTile.vue';
import { CHART_FONT, useApexChart } from './useApexChart.js';
import { useChartPalette } from './chartPalette.js';

const chartId = useId();
const { color, mix, paletteKey } = useChartPalette(5);

const plans = [
  { name: 'Basic Plan', value: '$25,864', share: '45%' },
  { name: 'Premium Plan', value: '$14,258', share: '35%' },
  { name: 'Enterprise Plan', value: '$5,258', share: '20%' },
];

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '180px',
      maxWidth: '100%',
      type: 'donut',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
    },
    // Three slices cut from one tone: full strength, then 30% and 50%
    // transparent, so the donut reads without needing a second hue.
    colors: [color.value, mix(30), mix(50)],
    series: [45, 35, 20],
    labels: ['Basic Plan', 'Premium Plan', 'Enterprise Plan'],
    stroke: { show: true, colors: ['var(--color-base-200)'], width: 1 },
    plotOptions: { pie: { labels: { show: true }, size: '100%' } },
    dataLabels: { enabled: false },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, w }) {
        const value = series[seriesIndex];
        const color = w.globals.colors[seriesIndex];
        return `
        <div class="bg-base-100 border-(length:--border) border-base-content/10 shadow-xl rounded-box p-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-selector" style="background-color: ${color}"></span>
            <span class="text-base-content/70">${w.globals.labels[seriesIndex]}: <b class="text-base-content ml-1">${value}%</b></span>
          </div>
        </div>
      `;
      },
    },
    legend: { show: false },
  }),
  paletteKey,
);
</script>
