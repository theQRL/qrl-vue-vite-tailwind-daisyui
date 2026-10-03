import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import ApexCharts from 'apexcharts';

/**
 * Mounts an ApexCharts instance on a template ref and tears it down with the
 * component.
 *
 * `buildOptions` is a factory rather than a plain object so each component gets
 * its own options, and so the palette can be re-read when `watchSource` changes.
 */
export function useApexChart(buildOptions, watchSource) {
  const chartElement = ref(null);
  let chartInstance = null;

  onMounted(() => {
    if (!chartElement.value) return;
    chartInstance = new ApexCharts(chartElement.value, buildOptions());
    chartInstance.render();
  });

  if (watchSource) {
    watch(watchSource, () => {
      // Colours only — no animation, and no redraw of the paths themselves.
      chartInstance?.updateOptions(buildOptions(), false, false);
    });
  }

  onBeforeUnmount(() => {
    chartInstance?.destroy();
    chartInstance = null;
  });

  return chartElement;
}

/** base-content at a given transparency — used for grid lines, tracks and axes,
 *  which stay neutral even when the series are themed. */
export const fade = (pct) => `color-mix(in srgb, var(--color-base-content), transparent ${pct}%)`;

/** Chart text follows the active brand's body font instead of a hard-coded family. */
export const CHART_FONT = 'inherit';
