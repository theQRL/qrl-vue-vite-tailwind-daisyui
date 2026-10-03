<template>
  <ChartTile label="Radial">
    <div
      class="flex h-110 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-6 md:px-10"
    >
      <div class="mb-2 flex items-center justify-between">
        <h4 class="text-sm font-semibold text-base-content/60">Support Score</h4>
        <span
          class="flex items-center gap-0.5 rounded-selector bg-success/10 px-1.5 py-0.5 text-xs font-semibold text-success"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          6%
        </span>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex w-36 shrink-0 flex-col items-center gap-1">
          <div ref="chartElement" :id="chartId" class="w-full"></div>
        </div>

        <div class="mt-4 flex w-full flex-col gap-5">
          <div v-for="m in metrics" :key="m.label" class="flex items-center gap-3">
            <span class="size-2 shrink-0 rounded-full" :style="{ backgroundColor: m.tint }"></span>
            <span class="w-24 shrink-0 text-xs font-medium text-base-content/70">{{ m.label }}</span>
            <div class="h-1 flex-1 overflow-hidden rounded-full bg-base-content/10">
              <div class="h-full rounded-full" :style="{ width: `${m.pct}%`, backgroundColor: m.tint }"></div>
            </div>
            <span class="w-9 shrink-0 text-right text-xs font-semibold text-base-content">{{ m.pct }}%</span>
          </div>
        </div>
      </div>
    </div>
  </ChartTile>
</template>

<script setup>
import { computed, useId } from 'vue';
import ChartTile from './ChartTile.vue';
import { CHART_FONT, fade, useApexChart } from './useApexChart.js';
import { useChartPalette } from './chartPalette.js';

const chartId = useId();
const { color, mix, paletteKey } = useChartPalette(8);

const metrics = computed(() => [
  { label: 'Response', pct: 92, tint: color.value },
  { label: 'Quality', pct: 81, tint: mix(30) },
  { label: 'Speed', pct: 78, tint: mix(50) },
]);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: 250,
      maxWidth: '100%',
      type: 'radialBar',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [color.value],
    stroke: { lineCap: 'round' },
    series: [84],
    labels: ['Score'],
    plotOptions: {
      radialBar: {
        track: { show: true, background: fade(93), strokeWidth: '100%' },
        hollow: { margin: 0, size: '58%' },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            show: true,
            fontSize: '20px',
            fontFamily: CHART_FONT,
            fontWeight: 700,
            color: 'var(--color-base-content)',
            offsetY: 6,
            formatter: (val) => `${val}`,
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, w }) {
        const value = series[seriesIndex];
        const color = w.globals.colors[seriesIndex];
        return `
        <div class="bg-base-100 shadow-xl rounded-box p-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-selector" style="background-color: ${color}"></span>
            <span class="text-base-content/70">${w.globals.labels[seriesIndex]}: <b class="text-base-content ml-1">${value}/100</b></span>
          </div>
        </div>
      `;
      },
    },
  }),
  paletteKey,
);
</script>
