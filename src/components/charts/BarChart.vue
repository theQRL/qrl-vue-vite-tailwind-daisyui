<template>
  <ChartTile label="Bar">
    <div
      class="flex h-110 w-full flex-col rounded-box border-(length:--border) border-base-content/10 bg-base-200/80 p-7"
    >
      <div class="flex w-full items-start justify-between">
        <div class="flex flex-col">
          <h4 class="text-base font-semibold text-base-content">Traffic sources</h4>
          <p class="text-sm font-medium text-base-content/40">Where your visitors come from</p>
        </div>
        <button class="text-base-content/40 transition-colors hover:text-base-content/70" aria-label="More options">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      <div class="mt-3 mb-1 flex items-center gap-2">
        <p class="text-4xl leading-none font-bold tracking-tight text-base-content">2.5M</p>
        <div class="flex items-center rounded-selector bg-success/10 px-2 py-1">
          <span class="text-xs font-semibold text-success">+18.4%</span>
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
const { color, contrast, paletteKey } = useChartPalette(3);

const chartElement = useApexChart(
  () => ({
    chart: {
      height: '300px',
      maxWidth: '100%',
      type: 'bar',
      fontFamily: CHART_FONT,
      toolbar: { show: false },
    },
    colors: [color.value],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '42%',
        borderRadius: 8,
        borderRadiusApplication: 'around',
        colors: {
          backgroundBarColors: [fade(92)],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 8,
        },
      },
    },
    series: [{ name: 'Visitors', data: [900000, 650000, 420000, 260000, 270000] }],
    xaxis: {
      categories: ['Google', 'Instagram', 'Facebook', 'YouTube', 'ChatGPT'],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: 'var(--color-base-content)', fontSize: '13px', fontWeight: 600 },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      offsetX: 10,
      style: {
        fontSize: '12px',
        fontFamily: CHART_FONT,
        fontWeight: 600,
        colors: [contrast.value],
      },
      background: { enabled: false },
      formatter: function (val) {
        if (val >= 1000000) {
          const m = val / 1000000;
          return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
        }
        if (val >= 1000) return `${Math.round(val / 1000)}K`;
        return `${val}`;
      },
    },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const color = w.globals.colors[seriesIndex];
        const name = w.globals.labels[dataPointIndex];
        const total = w.globals.series[seriesIndex].reduce((a, b) => a + b, 0);
        const pct = ((value / total) * 100).toFixed(1);
        return `
        <div class="text-base-content p-3 text-xs bg-base-100 rounded-box flex items-center gap-2">
          <span class="size-2 rounded-sm" style="background-color: ${color}"></span>
          <span class="font-medium">${name}: <b class="font-bold">${value.toLocaleString()}</b> <span class="text-base-content/40">(${pct}%)</span></span>
        </div>
      `;
      },
    },
  }),
  paletteKey,
);
</script>
