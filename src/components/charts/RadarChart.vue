<template>
  <ChartTile label="Radar">
    <div
      class="flex h-120 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7"
    >
      <div class="mb-2 flex w-full items-start justify-between">
        <div class="flex flex-col">
          <h4 class="text-base font-semibold text-base-content">Team Skill Radar</h4>
          <p class="text-sm font-medium text-base-content/40">Average across 6 capabilities</p>
        </div>
        <div class="flex shrink-0 items-center rounded-selector bg-success/10 px-2 py-1">
          <span class="text-xs font-semibold text-success">+6.2%</span>
        </div>
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div ref="chartElement" :id="chartId" class="w-full"></div>
      </div>

      <div class="mt-2 flex flex-wrap items-center justify-center gap-2">
        <span class="flex items-center gap-1 rounded-selector border border-base-content/10 bg-base-100 px-2 py-1">
          <span class="size-2 shrink-0 rounded-full" :style="{ backgroundColor: color }"></span>
          <span class="text-xs font-medium text-base-content/70">Current Team &middot; 79 avg</span>
        </span>
      </div>
    </div>
  </ChartTile>
</template>

<script setup>
import { useId } from 'vue';
import ChartTile from './ChartTile.vue';
import { CHART_FONT, fade, useApexChart } from './useApexChart.js';
import { useChartPalette } from './chartPalette.js';

const chartId = useId();
const { color, paletteKey } = useChartPalette(7);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '230px',
      maxWidth: '100%',
      type: 'radar',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
    },
    colors: [color.value],
    series: [{ name: 'Current Team', data: [85, 72, 90, 68, 76, 82] }],
    xaxis: {
      categories: ['Design', 'Development', 'Marketing', 'Strategy', 'Support', 'Delivery'],
      labels: {
        style: {
          colors: Array(6).fill('var(--color-base-content)'),
          fontSize: '11px',
          fontFamily: CHART_FONT,
        },
      },
    },
    yaxis: { show: false },
    plotOptions: {
      radar: {
        size: 85,
        polygons: { strokeColors: fade(90), connectorColors: fade(90) },
      },
    },
    fill: { opacity: 0.25 },
    stroke: { width: 2, colors: [color.value] },
    markers: {
      size: 3,
      colors: [color.value],
      strokeColors: 'var(--color-base-200)',
      strokeWidth: 2,
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const color = w.globals.colors[seriesIndex];
        const category = w.globals.labels[dataPointIndex];
        return `
        <div class="bg-base-100 rounded-box p-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-selector" style="background-color: ${color}"></span>
            <span class="text-base-content/70">${category}: <b class="text-base-content ml-1">${value}</b></span>
          </div>
        </div>
      `;
      },
    },
  }),
  paletteKey,
);
</script>
