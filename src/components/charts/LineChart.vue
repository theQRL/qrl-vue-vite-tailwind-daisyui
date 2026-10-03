<template>
  <ChartTile label="Line">
    <div class="h-120 w-full rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7 md:p-10">
      <div class="mb-6 flex flex-col items-start justify-between gap-4">
        <div class="flex flex-col">
          <h4 class="text-md font-semibold text-base-content/50">Total Revenue</h4>
          <div class="flex items-center gap-2">
            <p class="mt-1 text-3xl font-semibold text-base-content">$25,864</p>
            <div class="flex gap-2 sm:items-center sm:gap-3">
              <div class="mt-2 flex items-center rounded-selector bg-success/10 px-2 py-1">
                <span class="text-xs font-semibold text-success">+</span>
                <span class="text-xs font-semibold text-success">14.5%</span>
              </div>
            </div>
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
const { color, paletteKey } = useChartPalette(1);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '300px',
      maxWidth: '100%',
      type: 'line',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: { enabled: true, opacity: 0.3, blur: 8, top: 20 },
    },
    stroke: { width: 4, curve: 'smooth', colors: [color.value] },
    series: [{ name: 'Revenue', data: [4400, 3400, 3700, 4900, 4600, 5000] }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: { fontSize: '12px', colors: 'var(--color-base-content)', fontWeight: 400 },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
      labels: { formatter: (value) => '$' + value },
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const color = w.globals.colors[seriesIndex];
        return `
        <div class="text-base-content p-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-selector" style="background-color: ${color}"></span>
            <span>Revenue: <b>$${value.toLocaleString()}</b></span>
          </div>
        </div>
      `;
      },
    },
    dataLabels: { enabled: false },
    grid: {
      show: true,
      borderColor: fade(95),
      padding: { top: 10, right: 0, bottom: 0, left: 10 },
    },
    colors: [color.value],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: color.value, opacity: 0 },
          { offset: 50, color: color.value },
        ],
      },
    },
  }),
  paletteKey,
);
</script>
