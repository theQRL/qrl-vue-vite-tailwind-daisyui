<template>
  <a href="#main" class="skip-link">Skip to content</a>

  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <!-- Lockup and spacing follow the headers in ~/dice and ~/webtools:
         container-site, a 14/16 row, logo at h-7/h-8, ghost btn-sm controls.
         The vertical rule is daisyUI's divider-horizontal, trimmed to the
         logo height (it defaults to align-self:stretch and a 1rem margin). -->
    <div class="container-site flex h-14 items-center justify-between gap-3 sm:h-16">
      <a href="#main" class="flex min-w-0 items-center" aria-label="theQRL component library, skip to content">
        <img :src="logoUrl" alt="QRL" width="96" height="32" class="h-7 w-auto shrink-0 sm:h-8" />
        <div class="divider divider-horizontal mx-2 my-0 h-7 self-center max-sm:hidden sm:h-8"></div>
        <span class="min-w-0 truncate font-display text-base/5 font-semibold tracking-tight max-sm:hidden sm:text-lg/6">
          Component Library
        </span>
      </a>

      <div class="flex shrink-0 items-center gap-1">
        <div role="tablist" class="tabs tabs-box tabs-sm">
          <button
            v-for="b in brands"
            :key="b.id"
            role="tab"
            class="tab whitespace-nowrap"
            :class="{ 'tab-active': brand === b.id }"
            :title="b.label"
            @click="brand = b.id"
          >
            <span class="sm:hidden">{{ b.short }}</span>
            <span class="hidden sm:inline">{{ b.label }}</span>
          </button>
        </div>

        <button
          type="button"
          class="btn btn-ghost btn-sm btn-square"
          :aria-label="`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`"
          :aria-pressed="mode === 'light'"
          @click="toggleMode"
        >
          <svg
            data-icon-sun
            class="size-5 sm:size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              stroke-linecap="round"
            />
          </svg>
          <svg
            data-icon-moon
            class="size-5 sm:size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <main id="main">
    <!-- hero -->
    <section class="hero-surface">
      <div class="container-site py-section">
        <p class="kicker">Quantum Resistant Ledger</p>
        <h1 class="text-hero mt-3 max-w-3xl">
          Every daisyUI 5 component,<br />on the QRL
          <span class="text-rotate text-primary">
            <span>
              <span>themes.</span>
              <span>tokens.</span>
              <span>palette.</span>
            </span>
          </span>
        </h1>
        <p class="text-lead mt-5 max-w-xl text-base-content/70">
          Vue 3 + Vite + Tailwind CSS 4 + daisyUI {{ daisyVersion }}, wired to the theQRL.org design system. Two brands,
          each with a light and a dark theme — switch them in the header and watch every component below follow.
        </p>

        <nav class="mt-8 flex flex-wrap gap-2" aria-label="Sections">
          <a v-for="s in sections" :key="s.id" :href="`#${s.id}`" class="btn btn-sm btn-outline">{{ s.label }}</a>
        </nav>
      </div>
    </section>

    <!-- palette -->
    <section id="palette" class="container-site scroll-mt-20 py-12">
      <p class="section-eyebrow">Palette</p>
      <h2 class="section-heading mt-2">Semantic colors</h2>
      <p class="mt-2 max-w-2xl text-base-content/60">
        Every component below draws from these eleven tokens, so a theme switch recolours the whole page.
      </p>
      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        <div v-for="c in palette" :key="c.name" class="rounded-box border border-base-300 p-4" :class="c.classes">
          <span class="font-mono text-xs">{{ c.name }}</span>
        </div>
      </div>
    </section>

    <ActionsSection @toast="fireToast" />
    <DataDisplaySection />
    <NavigationSection />
    <FeedbackSection />
    <DataInputSection />
    <LayoutSection />
    <ChartsSection />
  </main>

  <footer class="footer sm:footer-horizontal border-t border-base-300 bg-base-200">
    <div class="container-site flex flex-wrap items-center justify-between gap-4 py-8">
      <p class="text-sm text-base-content/60">
        Active theme: <code class="font-mono">{{ theme }}</code>
      </p>
      <a class="link link-secondary text-sm" href="https://daisyui.com/components" target="_blank" rel="noopener">
        daisyUI component docs
      </a>
    </div>
  </footer>

  <!-- FAB: fixed to the viewport corner, so it lives outside the sections -->
  <div class="fab">
    <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary" aria-label="Open quick actions">+</div>
    <div class="fab-close">Close <span class="btn btn-circle btn-lg btn-error">×</span></div>
    <div>
      Top
      <button class="btn btn-lg btn-circle" aria-label="Back to top" @click="scrollTop">↑</button>
    </div>
    <div>
      Toast
      <button class="btn btn-lg btn-circle" aria-label="Fire a toast" @click="fireToast">🔔</button>
    </div>
    <div>
      Theme
      <button class="btn btn-lg btn-circle" aria-label="Toggle light and dark" @click="toggleMode">◑</button>
    </div>
  </div>

  <!-- Toast -->
  <div v-if="toastVisible" class="toast toast-end toast-bottom">
    <div class="alert alert-success">
      <span>Block accepted — height {{ toastHeight }}.</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import 'cally';
import logoUrl from './assets/qrl-logo.svg';
import ActionsSection from './components/ActionsSection.vue';
import DataDisplaySection from './components/DataDisplaySection.vue';
import NavigationSection from './components/NavigationSection.vue';
import FeedbackSection from './components/FeedbackSection.vue';
import DataInputSection from './components/DataInputSection.vue';
import LayoutSection from './components/LayoutSection.vue';
const ChartsSection = defineAsyncComponent(() => import('./components/ChartsSection.vue'));

const daisyVersion = '5';

const brands = [
  { id: 'dawn', label: 'Quantum Dawn', short: 'Dawn' },
  { id: 'vacuum', label: 'Hard Vacuum', short: 'Vacuum' },
];

const sections = [
  { id: 'palette', label: 'Palette' },
  { id: 'actions', label: 'Actions' },
  { id: 'data-display', label: 'Data display' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'data-input', label: 'Data input' },
  { id: 'layout', label: 'Layout' },
  { id: 'charts', label: 'Charts' },
];

// Class strings are written out in full: Tailwind scans source text, so
// `bg-${name}` built at runtime would never be generated.
const palette = [
  { name: 'primary', classes: 'bg-primary text-primary-content' },
  { name: 'secondary', classes: 'bg-secondary text-secondary-content' },
  { name: 'accent', classes: 'bg-accent text-accent-content' },
  { name: 'neutral', classes: 'bg-neutral text-neutral-content' },
  { name: 'info', classes: 'bg-info text-info-content' },
  { name: 'success', classes: 'bg-success text-success-content' },
  { name: 'warning', classes: 'bg-warning text-warning-content' },
  { name: 'error', classes: 'bg-error text-error-content' },
  { name: 'base-100', classes: 'bg-base-100 text-base-content' },
  { name: 'base-200', classes: 'bg-base-200 text-base-content' },
  { name: 'base-300', classes: 'bg-base-300 text-base-content' },
];

const root = document.documentElement;

const brand = ref(root.getAttribute('data-brand') || 'dawn');
const mode = ref((root.getAttribute('data-theme') || '').endsWith('-light') ? 'light' : 'dark');
const scrolled = ref(false);
const toastVisible = ref(false);
const toastHeight = ref('4,912,507');

const theme = computed(() => `qrl-${brand.value}${mode.value === 'light' ? '-light' : ''}`);

watchEffect(() => {
  root.setAttribute('data-brand', brand.value);
  root.setAttribute('data-theme', theme.value);
  try {
    localStorage.setItem('qrl-brand', brand.value);
    localStorage.setItem('qrl-theme', mode.value);
  } catch (e) {
    /* storage unavailable (private mode) — theme still applies for this visit */
  }
});

function toggleMode() {
  mode.value = mode.value === 'light' ? 'dark' : 'light';
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let toastTimer;
function fireToast() {
  toastHeight.value = (4912507 + Math.floor(Math.random() * 500)).toLocaleString();
  toastVisible.value = true;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toastVisible.value = false), 3000);
}

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  clearTimeout(toastTimer);
});
</script>
