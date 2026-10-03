<template>
  <SectionBlock
    id="actions"
    eyebrow="Actions"
    title="Actions"
    blurb="Buttons, menus, dialogs and the controls that fire them."
  >
    <DemoCard title="Button">
      <div class="flex flex-wrap gap-2">
        <button class="btn">default</button>
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-accent">accent</button>
        <button class="btn btn-neutral">neutral</button>
        <button class="btn btn-info">info</button>
        <button class="btn btn-success">success</button>
        <button class="btn btn-warning">warning</button>
        <button class="btn btn-error">error</button>
      </div>
    </DemoCard>

    <DemoCard title="Button — styles">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-outline">outline</button>
        <button class="btn btn-dash">dash</button>
        <button class="btn btn-soft">soft</button>
        <button class="btn btn-ghost">ghost</button>
        <button class="btn btn-link">link</button>
        <button class="btn btn-active">active</button>
        <button class="btn" disabled>disabled</button>
      </div>
    </DemoCard>

    <DemoCard title="Button — sizes &amp; shapes">
      <div class="flex flex-wrap items-center gap-2">
        <button class="btn btn-xs">xs</button>
        <button class="btn btn-sm">sm</button>
        <button class="btn btn-md">md</button>
        <button class="btn btn-lg">lg</button>
        <button class="btn btn-xl">xl</button>
        <button class="btn btn-square" aria-label="Square button">□</button>
        <button class="btn btn-circle" aria-label="Circle button">○</button>
      </div>
      <button class="btn btn-block mt-3">block</button>
    </DemoCard>

    <DemoCard title="Dropdown">
      <div class="flex flex-wrap items-start gap-2">
        <details class="dropdown">
          <summary class="btn">details</summary>
          <ul class="menu dropdown-content z-1 mt-1 w-48 rounded-box bg-base-200 p-2 shadow-lg">
            <li><a>Wallet</a></li>
            <li><a>Explorer</a></li>
            <li><a>Docs</a></li>
          </ul>
        </details>

        <button class="btn" popovertarget="dd-popover" style="anchor-name: --dd-anchor">popover</button>
        <ul
          class="dropdown menu w-48 rounded-box bg-base-200 p-2 shadow-lg"
          popover
          id="dd-popover"
          style="position-anchor: --dd-anchor"
        >
          <li><a>Mainnet</a></li>
          <li><a>Testnet</a></li>
        </ul>
      </div>
    </DemoCard>

    <DemoCard title="Modal">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary" @click="dialog?.showModal()">dialog</button>
        <button class="btn" popovertarget="modal-popover">popover</button>
      </div>

      <dialog ref="dialog" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Native dialog</h3>
          <p class="py-4">Press <kbd class="kbd kbd-sm">Esc</kbd> or click outside to close.</p>
          <div class="modal-action">
            <form method="dialog"><button class="btn btn-primary">Close</button></form>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop"><button>close</button></form>
      </dialog>

      <div class="modal" id="modal-popover" popover>
        <div class="modal-box">
          <h3 class="text-lg font-bold">Popover modal</h3>
          <p class="py-4">This one uses the popover API, so focus is not trapped.</p>
          <div class="modal-action">
            <button class="btn" popovertarget="modal-popover" popovertargetaction="hide">Close</button>
          </div>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Swap">
      <div class="flex flex-wrap items-center gap-4">
        <label class="swap swap-rotate text-3xl">
          <input type="checkbox" aria-label="Swap rotate" />
          <div class="swap-on">🌞</div>
          <div class="swap-off">🌚</div>
        </label>
        <label class="swap swap-flip text-3xl">
          <input type="checkbox" aria-label="Swap flip" />
          <div class="swap-on">🔓</div>
          <div class="swap-off">🔒</div>
        </label>
        <label class="btn btn-circle swap swap-rotate">
          <input type="checkbox" aria-label="Swap menu icon" />
          <svg class="swap-off size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="swap-on size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </label>
      </div>
    </DemoCard>

    <DemoCard title="Theme controller">
      <p class="mb-3 text-sm text-base-content/60">
        Checked inputs set the theme with pure CSS — and outrank the header switcher until you reset them.
      </p>
      <div class="flex flex-wrap gap-1">
        <input type="radio" name="theme-controller-demo" class="btn btn-xs" value="" aria-label="off" checked />
        <input
          v-for="t in themeNames"
          :key="t.value"
          type="radio"
          name="theme-controller-demo"
          class="theme-controller btn btn-xs"
          :value="t.value"
          :aria-label="t.label"
        />
      </div>
    </DemoCard>

    <DemoCard title="Filter">
      <form class="filter">
        <input class="btn btn-square" type="reset" value="×" />
        <input class="btn" type="radio" name="chain-filter" aria-label="All" />
        <input class="btn" type="radio" name="chain-filter" aria-label="Mainnet" />
        <input class="btn" type="radio" name="chain-filter" aria-label="Testnet" />
      </form>
    </DemoCard>

    <DemoCard title="Toast">
      <button class="btn btn-secondary" @click="fireToast">Fire a toast</button>
      <p class="mt-3 text-sm text-base-content/60">Appears bottom-right for 3 seconds.</p>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';

const dialog = useTemplateRef('dialog');
const themeNames = [
  { value: 'qrl-dawn', label: 'dawn' },
  { value: 'qrl-dawn-light', label: 'dawn light' },
  { value: 'qrl-vacuum', label: 'vacuum' },
  { value: 'qrl-vacuum-light', label: 'vacuum light' },
];

const emit = defineEmits(['toast']);
function fireToast() {
  emit('toast');
}
</script>
