<template>
  <ChartTile label="Heatmap">
    <div
      class="flex h-96 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-6"
    >
      <div class="mb-4 flex w-full items-start justify-between">
        <div class="flex flex-col">
          <h4 class="text-base font-semibold text-base-content">Task Completion Activity</h4>
          <p class="text-sm font-medium text-base-content/40">Last 12 weeks</p>
        </div>
        <div class="flex shrink-0 items-center rounded-selector bg-success/10 px-2 py-1">
          <span class="text-xs font-semibold text-success">312 total</span>
        </div>
      </div>

      <div class="flex flex-1 items-center">
        <div ref="chartElement" :id="chartId" class="w-full"></div>
      </div>

      <div class="flex items-center justify-end gap-2">
        <span class="text-xs text-base-content/40">Less</span>
        <div
          class="h-2 w-20 rounded-full"
          :style="{ backgroundImage: `linear-gradient(to right, ${step(10)}, ${color})` }"
        ></div>
        <span class="text-xs text-base-content/40">More</span>
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
const { color, paletteKey, step } = useChartPalette(6);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '250px',
      maxWidth: '100%',
      type: 'heatmap',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
    },
    series: [
      { name: 'Mon', data: [2, 5, 3, 7, 4, 6, 8, 3, 5, 9, 4, 6] },
      { name: 'Tue', data: [4, 3, 6, 2, 8, 5, 3, 7, 6, 4, 8, 5] },
      { name: 'Wed', data: [6, 7, 4, 8, 3, 9, 5, 6, 2, 7, 5, 9] },
      { name: 'Thu', data: [3, 4, 8, 5, 6, 2, 7, 4, 8, 3, 6, 7] },
      { name: 'Fri', data: [7, 8, 5, 9, 4, 7, 6, 9, 5, 8, 7, 4] },
      { name: 'Sat', data: [1, 2, 0, 3, 1, 2, 0, 1, 3, 2, 1, 0] },
      { name: 'Sun', data: [0, 1, 2, 0, 1, 0, 2, 0, 1, 0, 2, 1] },
    ],
    plotOptions: {
      heatmap: {
        radius: 3,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 1, color: step(10) },
            { from: 1, to: 2, color: step(20) },
            { from: 2, to: 3, color: step(30) },
            { from: 3, to: 4, color: step(40) },
            { from: 4, to: 5, color: step(50) },
            { from: 5, to: 6, color: step(60) },
            { from: 6, to: 7, color: step(80) },
            { from: 7, to: 8, color: step(90) },
            { from: 8, to: 9, color: step(100) },
          ],
        },
      },
    },
    stroke: { width: 3, colors: ['var(--color-base-200)'] },
    xaxis: {
      type: 'category',
      categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: 'var(--color-base-content)', fontSize: '10px' } },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const day = w.globals.seriesNames[seriesIndex];
        const week = w.globals.labels[dataPointIndex];
        return `
        <div class="bg-base-100 p-3 text-xs">
          <span class="text-base-content/70">${day}, ${week}: <b class="text-base-content ml-1">${value} tasks</b></span>
        </div>
      `;
      },
    },
  }),
  paletteKey,
);
</script>
