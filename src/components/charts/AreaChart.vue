<template>
  <ChartTile label="Area">
    <div class="h-120 w-full rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7 md:p-10">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h4 class="text-md font-semibold text-base-content/50">Total Revenue</h4>
          <p class="mt-1 text-3xl font-semibold text-base-content">$18,864</p>
        </div>
        <div class="flex flex-col">
          <div class="text-md ml-auto flex items-center font-semibold text-success">
            <svg class="h-4 w-4" aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
            18%
          </div>
          <p class="text-sm font-semibold text-base-content/50">vs Last 6 months</p>
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
const { color, paletteKey } = useChartPalette(0);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '300px',
      maxWidth: '100%',
      type: 'area',
      dropShadow: { enabled: false },
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: CHART_FONT,
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
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: color.value,
        gradientToColors: [color.value],
      },
    },
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    grid: { show: true, borderColor: fade(95) },
    colors: [color.value],
    series: [{ name: 'Revenue', data: [4400, 3400, 3700, 4900, 4600, 6200] }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: 'var(--color-base-content)', fontSize: '12px', fontWeight: 400 },
      },
    },
    yaxis: {
      show: false,
      labels: {
        style: { colors: 'var(--color-base-content)', fontSize: '12px', fontWeight: 400 },
      },
    },
  }),
  paletteKey,
);
</script>
