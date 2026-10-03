<template>
  <ChartTile label="Column">
    <div class="h-120 w-full rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7 md:p-10">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div class="flex flex-col">
          <h4 class="text-md font-semibold text-base-content/50">Total Revenue</h4>
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <p class="text-3xl font-semibold text-base-content">$25,864</p>
            <div class="flex w-fit items-center rounded-selector bg-success/10 px-2 py-1">
              <span class="text-xs font-semibold text-success">+</span>
              <span class="text-xs font-semibold text-success">14.5%</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <div class="size-2 rounded-selector" :style="{ backgroundColor: color }"></div>
            <p class="text-xs text-base-content">Basic plan</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="size-2 rounded-selector" :style="{ backgroundColor: soft }"></div>
            <p class="text-xs text-base-content">Premium plan</p>
          </div>
        </div>
      </div>

      <div ref="chartElement" :id="chartId" class="w-full"></div>
    </div>
  </ChartTile>
</template>

<script setup>
import { useId } from 'vue';
import ChartTile from './ChartTile.vue';
import { CHART_FONT, fade, useApexChart } from './useApexChart.js';
import { useChartPalette } from './chartPalette.js';

const chartId = useId();
const { color, soft, paletteKey } = useChartPalette(2);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '300px',
      maxWidth: '100%',
      type: 'bar',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
    },
    series: [
      { name: 'Basic Plan', data: [5500, 2200, 5200, 3500, 2500, 6200] },
      { name: 'Premium Plan', data: [4900, 2800, 1800, 3200, 4000, 5800] },
    ],
    colors: [color, soft].map((c) => c.value),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: { colors: 'var(--color-base-content)', opacity: 0.5, fontSize: '12px' },
      },
      axisBorder: { show: true, color: fade(90) },
      axisTicks: { show: true, color: fade(90) },
    },
    yaxis: { show: false },
    fill: { opacity: 1 },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const color = w.globals.colors[seriesIndex];
        const seriesName = w.config.series[seriesIndex].name;
        return `
        <div class="text-base-content p-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-selector" style="background-color: ${color}"></span>
            <span>${seriesName}: <b>$${value.toLocaleString()}</b></span>
          </div>
        </div>
      `;
      },
    },
    grid: { borderColor: fade(95) },
    legend: { show: false },
  }),
  paletteKey,
);
</script>
