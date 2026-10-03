import { computed, inject, provide, ref } from 'vue';

const KEY = Symbol('qrl-chart-palette');

/**
 * Semantic slots that read well as a data series. `neutral` is left out: in the
 * QRL themes it sits within a few percent of base-content, so a chart drawn in
 * it would look like the monochrome default.
 */
export const TONES = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];

/** Owned by ChartsSection; every chart below it reads from here. */
export function provideChartPalette() {
  const themed = ref(true);
  const offset = ref(0);

  provide(KEY, { themed, offset });

  function shuffle() {
    // Step by a value coprime-ish with the tone count so every chart lands on a
    // different colour than it had, rather than some staying put.
    offset.value += 1 + Math.floor(Math.random() * (TONES.length - 1));
  }

  return { themed, offset, shuffle };
}

/**
 * `slot` is the chart's fixed position in the section; combined with the shared
 * offset it decides which tone this chart draws in.
 */
export function useChartPalette(slot) {
  const ctx = inject(KEY, null);

  const tone = computed(() => {
    if (!ctx?.themed.value) return null;
    return TONES[(slot + ctx.offset.value) % TONES.length];
  });

  /** The token name to build var()/color-mix() from — falls back to base-content. */
  const token = computed(() => tone.value ?? 'base-content');

  return {
    tone,
    /** Watch source: rebuild chart options whenever the palette changes. */
    paletteKey: computed(() => `${ctx?.themed.value}-${ctx?.offset.value}`),
    color: computed(() => `var(--color-${token.value})`),
    soft: computed(() => `color-mix(in srgb, var(--color-${token.value}), transparent 50%)`),
    /** Readable text on top of `color`. base-content has no -content pair. */
    contrast: computed(() => (tone.value ? `var(--color-${tone.value}-content)` : 'var(--color-base-100)')),
    /** Called inside the options factory, which re-runs when the palette changes. */
    mix: (pct) => `color-mix(in srgb, var(--color-${token.value}), transparent ${pct}%)`,
    /** For the heatmap ramp: the tone mixed *into* the page background. */
    step: (pct) => `color-mix(in oklch, var(--color-${token.value}) ${pct}%, var(--color-base-100))`,
  };
}
