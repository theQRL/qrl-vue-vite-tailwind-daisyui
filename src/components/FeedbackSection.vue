<template>
  <SectionBlock
    id="feedback"
    eyebrow="Feedback"
    title="Feedback"
    blurb="Telling the user what happened, or that something is still happening."
  >
    <DemoCard title="Alert">
      <div class="space-y-2">
        <div role="alert" class="alert">
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="9" />
            <path stroke-linecap="round" d="M12 8h.01M11 12h1v4h1" />
          </svg>
          <span>12 new blocks since you loaded this page.</span>
        </div>
        <div role="alert" class="alert alert-info alert-soft">Soft info.</div>
        <div role="alert" class="alert alert-success alert-outline">Outline success.</div>
        <div role="alert" class="alert alert-warning alert-dash">Dash warning.</div>
        <div role="alert" class="alert alert-error">
          <span>Broadcast failed.</span>
          <button class="btn btn-sm">Retry</button>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Loading">
      <div class="flex flex-wrap items-center gap-4">
        <span class="loading loading-spinner"></span>
        <span class="loading loading-dots"></span>
        <span class="loading loading-ring"></span>
        <span class="loading loading-ball"></span>
        <span class="loading loading-bars"></span>
        <span class="loading loading-infinity"></span>
      </div>
      <div class="mt-4 flex flex-wrap items-center gap-3 text-primary">
        <span class="loading loading-spinner loading-xs"></span>
        <span class="loading loading-spinner loading-sm"></span>
        <span class="loading loading-spinner loading-md"></span>
        <span class="loading loading-spinner loading-lg"></span>
        <span class="loading loading-spinner loading-xl"></span>
      </div>
    </DemoCard>

    <DemoCard title="Progress">
      <div class="space-y-2">
        <progress class="progress" :value="value" max="100"></progress>
        <progress class="progress progress-primary" :value="value" max="100"></progress>
        <progress class="progress progress-secondary" :value="value" max="100"></progress>
        <progress class="progress progress-accent" :value="value" max="100"></progress>
        <progress class="progress progress-info" :value="value" max="100"></progress>
        <progress class="progress progress-success" :value="value" max="100"></progress>
        <progress class="progress progress-warning" :value="value" max="100"></progress>
        <progress class="progress progress-error" :value="value" max="100"></progress>
        <progress class="progress"></progress>
      </div>
      <input
        v-model.number="value"
        type="range"
        min="0"
        max="100"
        class="range range-xs range-primary mt-4"
        aria-label="Progress value"
      />
    </DemoCard>

    <DemoCard title="Radial progress">
      <div class="flex flex-wrap items-center gap-4">
        <div class="radial-progress" :style="{ '--value': value }" :aria-valuenow="value" role="progressbar">
          {{ value }}%
        </div>
        <div
          class="radial-progress bg-primary text-primary-content border-4 border-primary"
          :style="{ '--value': value }"
          :aria-valuenow="value"
          role="progressbar"
        >
          {{ value }}%
        </div>
        <div
          class="radial-progress text-secondary"
          :style="{ '--value': value, '--size': '3.5rem', '--thickness': '3px' }"
          :aria-valuenow="value"
          role="progressbar"
        >
          {{ value }}
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Skeleton">
      <div class="flex items-center gap-4">
        <div class="skeleton size-14 shrink-0 rounded-full"></div>
        <div class="flex w-full flex-col gap-3">
          <div class="skeleton h-4 w-2/3"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div class="skeleton mt-4 h-28 w-full"></div>
      <div class="skeleton skeleton-text mt-4">Loading ledger data…</div>
    </DemoCard>

    <DemoCard title="Tooltip">
      <div class="flex flex-wrap items-center gap-3 py-6">
        <div class="tooltip tooltip-top" data-tip="top"><button class="btn btn-sm">top</button></div>
        <div class="tooltip tooltip-bottom" data-tip="bottom"><button class="btn btn-sm">bottom</button></div>
        <div class="tooltip tooltip-left" data-tip="left"><button class="btn btn-sm">left</button></div>
        <div class="tooltip tooltip-right" data-tip="right"><button class="btn btn-sm">right</button></div>
        <div class="tooltip tooltip-open tooltip-primary" data-tip="always open">
          <button class="btn btn-sm btn-primary">open</button>
        </div>
      </div>
      <div class="tooltip tooltip-secondary" data-tip="ignored when tooltip-content is present">
        <div class="tooltip-content">
          <div class="font-semibold">Rich content</div>
          <div class="text-xs opacity-70">Any markup fits in here.</div>
        </div>
        <button class="btn btn-sm btn-secondary">tooltip-content</button>
      </div>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import { ref } from 'vue';
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';

const value = ref(68);
</script>
