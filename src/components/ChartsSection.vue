<template>
  <SectionBlock
    id="charts"
    eyebrow="Charts"
    title="Charts"
    wide
    blurb="ApexCharts, themed entirely with daisyUI tokens. Series colours come from the active theme, so the charts follow the switcher like everything else on this page — and each one can take a semantic colour from the palette."
  >
    <template #actions>
      <div class="flex items-center gap-2">
        <div role="tablist" class="tabs tabs-box tabs-sm">
          <button role="tab" class="tab" :class="{ 'tab-active': !themed }" @click="themed = false">Monochrome</button>
          <button role="tab" class="tab" :class="{ 'tab-active': themed }" @click="themed = true">Themed</button>
        </div>

        <button
          class="btn btn-sm"
          :disabled="!themed"
          title="Reassign palette colours across the charts"
          @click="shuffle"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
          </svg>
          Shuffle
        </button>
      </div>
    </template>

    <AreaChart />
    <LineChart />
    <ColumnChart />
    <BarChart />
    <MixedChart />
    <PieChart />
    <HeatmapChart />
    <RadarChart />
    <RadialChart />
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue';
import { provideChartPalette } from './charts/chartPalette.js';
import AreaChart from './charts/AreaChart.vue';
import BarChart from './charts/BarChart.vue';
import ColumnChart from './charts/ColumnChart.vue';
import HeatmapChart from './charts/HeatmapChart.vue';
import LineChart from './charts/LineChart.vue';
import MixedChart from './charts/MixedChart.vue';
import PieChart from './charts/PieChart.vue';
import RadarChart from './charts/RadarChart.vue';
import RadialChart from './charts/RadialChart.vue';

// Must run before the chart children are set up so they can inject it.
const { themed, shuffle } = provideChartPalette();
</script>
