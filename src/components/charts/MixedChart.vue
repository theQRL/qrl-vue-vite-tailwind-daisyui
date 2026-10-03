<template>
  <ChartTile label="Mixed">
    <div
      class="flex h-96 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7"
    >
      <div class="mb-5 flex w-full items-start justify-between">
        <div class="flex flex-col">
          <h4 class="text-base font-semibold text-base-content">Revenue vs Target</h4>
          <p class="text-sm font-medium text-base-content/40">First half performance</p>
        </div>
        <div class="flex shrink-0 items-center rounded-selector bg-success/10 px-2 py-1">
          <span class="text-xs font-semibold text-success">+18.6% avg</span>
        </div>
      </div>

      <div ref="chartElement" :id="chartId" class="w-full"></div>

      <div class="mt-2 flex items-center justify-center gap-2">
        <span class="flex items-center gap-1.5 rounded-selector border border-base-content/10 bg-base-100 px-2.5 py-1">
          <span class="size-2 shrink-0 rounded-full" :style="{ backgroundColor: color }"></span>
          <span class="text-xs font-medium text-base-content/70">Revenue</span>
        </span>
        <span class="flex items-center gap-1.5 rounded-selector border border-base-content/10 bg-base-100 px-2.5 py-1">
          <span class="size-2 shrink-0 rounded-full" :style="{ backgroundColor: soft }"></span>
          <span class="text-xs font-medium text-base-content/70">Target</span>
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
const { color, soft, paletteKey } = useChartPalette(4);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '220px',
      maxWidth: '100%',
      type: 'line',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [color.value, soft.value],
    series: [
      { name: 'Revenue', type: 'column', data: [62, 71, 68, 80, 76, 89] },
      { name: 'Target', type: 'line', data: [65, 65, 70, 70, 75, 75] },
    ],
    plotOptions: {
      bar: { columnWidth: '45%', borderRadius: 4, borderRadiusApplication: 'around' },
    },
    stroke: { width: [0, 3], curve: 'straight', dashArray: [0, 6] },
    fill: { opacity: [1, 1] },
    markers: {
      size: [0, 4],
      colors: [color.value],
      strokeColors: 'var(--color-base-200)',
      strokeWidth: 2,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: { style: { colors: 'var(--color-base-content)', fontSize: '11px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
      labels: {
        style: { colors: 'var(--color-base-content)', fontSize: '11px' },
        formatter: (val) => `$${val}K`,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: fade(93),
      xaxis: { lines: { show: false } },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function ({ series, dataPointIndex, w }) {
        const rows = w.globals.seriesNames
          .map((name, i) => {
            const color = w.globals.colors[i];
            const value = series[i][dataPointIndex];
            return `
            <div class="flex items-center justify-between gap-4">
              <span class="flex items-center gap-1.5">
                <span class="size-2 rounded-selector shrink-0" style="background-color: ${color}"></span>
                <span class="text-base-content/60">${name}</span>
              </span>
              <span class="font-semibold text-base-content">$${value}K</span>
            </div>
          `;
          })
          .join('');
        return `
        <div class="bg-base-100 rounded-box p-3 text-xs">
          <div class="flex flex-col gap-1.5">${rows}</div>
        </div>
      `;
      },
    },
  }),
  paletteKey,
);
</script>
