<template>
  <SectionBlock
    id="data-input"
    eyebrow="Data input"
    title="Data input"
    blurb="Form controls, all inheriting the active theme's field radius and border."
  >
    <DemoCard title="Input">
      <div class="space-y-2">
        <input type="text" placeholder="default" class="input w-full" />
        <input type="text" placeholder="primary" class="input input-primary w-full" />
        <input type="text" placeholder="ghost" class="input input-ghost w-full" />
        <input type="text" placeholder="error" class="input input-error w-full" />
        <label class="input w-full">
          <span class="label">Q</span>
          <input type="text" placeholder="address" />
        </label>
        <label class="floating-label">
          <input type="text" placeholder="Node alias" class="input w-full" />
          <span>Node alias</span>
        </label>
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-2">
        <input type="text" placeholder="xs" class="input input-xs w-20" />
        <input type="text" placeholder="sm" class="input input-sm w-20" />
        <input type="text" placeholder="lg" class="input input-lg w-24" />
      </div>
    </DemoCard>

    <DemoCard title="Textarea">
      <textarea class="textarea w-full" placeholder="Transaction memo"></textarea>
      <textarea class="textarea textarea-primary mt-2 w-full" placeholder="Primary"></textarea>
    </DemoCard>

    <DemoCard title="Select">
      <select class="select w-full" aria-label="Network">
        <option disabled selected>Pick a network</option>
        <option>Mainnet</option>
        <option>Testnet</option>
      </select>
      <select class="select select-secondary mt-2 w-full" aria-label="Secondary select">
        <option>Secondary</option>
      </select>
      <select class="select select-ghost mt-2 w-full" aria-label="Ghost select">
        <option>Ghost</option>
      </select>
    </DemoCard>

    <DemoCard title="Checkbox">
      <div class="flex flex-wrap items-center gap-3">
        <input type="checkbox" class="checkbox" checked aria-label="Default" />
        <input type="checkbox" class="checkbox checkbox-primary" checked aria-label="Primary" />
        <input type="checkbox" class="checkbox checkbox-secondary" checked aria-label="Secondary" />
        <input type="checkbox" class="checkbox checkbox-accent" checked aria-label="Accent" />
        <input type="checkbox" class="checkbox checkbox-success" checked aria-label="Success" />
        <input type="checkbox" class="checkbox checkbox-error" checked aria-label="Error" />
        <input type="checkbox" class="checkbox" disabled aria-label="Disabled" />
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-3">
        <input type="checkbox" class="checkbox checkbox-xs" checked aria-label="xs" />
        <input type="checkbox" class="checkbox checkbox-sm" checked aria-label="sm" />
        <input type="checkbox" class="checkbox checkbox-lg" checked aria-label="lg" />
        <input type="checkbox" class="checkbox checkbox-xl" checked aria-label="xl" />
      </div>
    </DemoCard>

    <DemoCard title="Radio">
      <div class="flex flex-wrap items-center gap-3">
        <input type="radio" name="radio-demo" class="radio" checked aria-label="Default" />
        <input type="radio" name="radio-demo" class="radio radio-primary" aria-label="Primary" />
        <input type="radio" name="radio-demo" class="radio radio-secondary" aria-label="Secondary" />
        <input type="radio" name="radio-demo" class="radio radio-accent" aria-label="Accent" />
        <input type="radio" name="radio-demo" class="radio radio-success" aria-label="Success" />
        <input type="radio" name="radio-demo" class="radio radio-error" aria-label="Error" />
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-3">
        <input type="radio" name="radio-size" class="radio radio-xs" checked aria-label="xs" />
        <input type="radio" name="radio-size" class="radio radio-sm" aria-label="sm" />
        <input type="radio" name="radio-size" class="radio radio-lg" aria-label="lg" />
        <input type="radio" name="radio-size" class="radio radio-xl" aria-label="xl" />
      </div>
    </DemoCard>

    <DemoCard title="Toggle">
      <div class="flex flex-wrap items-center gap-3">
        <input type="checkbox" class="toggle" checked aria-label="Default" />
        <input type="checkbox" class="toggle toggle-primary" checked aria-label="Primary" />
        <input type="checkbox" class="toggle toggle-secondary" checked aria-label="Secondary" />
        <input type="checkbox" class="toggle toggle-accent" checked aria-label="Accent" />
        <input type="checkbox" class="toggle toggle-success" checked aria-label="Success" />
        <input type="checkbox" class="toggle toggle-error" checked aria-label="Error" />
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-3">
        <input type="checkbox" class="toggle toggle-xs" checked aria-label="xs" />
        <input type="checkbox" class="toggle toggle-sm" checked aria-label="sm" />
        <input type="checkbox" class="toggle toggle-lg" checked aria-label="lg" />
        <input type="checkbox" class="toggle toggle-xl" checked aria-label="xl" />
      </div>
    </DemoCard>

    <DemoCard title="Range">
      <div class="space-y-3">
        <input type="range" min="0" max="100" value="40" class="range" aria-label="Default range" />
        <input type="range" min="0" max="100" value="60" class="range range-primary" aria-label="Primary range" />
        <input
          type="range"
          min="0"
          max="100"
          value="25"
          class="range range-accent range-xs"
          aria-label="Extra small range"
        />
        <input
          type="range"
          min="0"
          max="100"
          value="70"
          class="range range-secondary"
          step="25"
          aria-label="Stepped range"
        />
        <div class="flex justify-between px-2 font-mono text-xs opacity-50">
          <span v-for="n in 5" :key="n">|</span>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Rating">
      <div class="rating">
        <input type="radio" name="rating-demo" class="rating-hidden" aria-label="clear" />
        <input
          v-for="n in 5"
          :key="n"
          type="radio"
          name="rating-demo"
          class="mask mask-star-2 bg-warning"
          :aria-label="`${n} star`"
          :checked="n === 4"
        />
      </div>
      <div class="rating rating-sm rating-half mt-3">
        <input type="radio" name="rating-half-demo" class="rating-hidden" aria-label="clear" />
        <template v-for="n in 5" :key="n">
          <input
            type="radio"
            name="rating-half-demo"
            class="mask mask-star-2 mask-half-1 bg-primary"
            :aria-label="`${n} star first half`"
          />
          <input
            type="radio"
            name="rating-half-demo"
            class="mask mask-star-2 mask-half-2 bg-primary"
            :aria-label="`${n} star second half`"
            :checked="n === 4"
          />
        </template>
      </div>
      <div class="rating rating-sm mt-3">
        <div class="mask mask-heart bg-error" aria-label="1 heart"></div>
        <div class="mask mask-heart bg-error" aria-label="2 heart" aria-current="true"></div>
        <div class="mask mask-heart bg-error" aria-label="3 heart"></div>
      </div>
    </DemoCard>

    <DemoCard title="File input">
      <input type="file" class="file-input w-full" aria-label="Default file input" />
      <input type="file" class="file-input file-input-primary mt-2 w-full" aria-label="Primary file input" />
      <input type="file" class="file-input file-input-ghost mt-2 w-full" aria-label="Ghost file input" />
    </DemoCard>

    <DemoCard title="OTP">
      <label class="otp otp-primary">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <input
          type="text"
          autocomplete="one-time-code"
          inputmode="numeric"
          maxlength="6"
          pattern="\d{6}"
          aria-label="One-time code"
          required
        />
      </label>
      <label class="otp otp-joined otp-sm mt-4">
        <span></span><span></span><span></span><span></span>
        <input
          type="text"
          autocomplete="one-time-code"
          inputmode="numeric"
          maxlength="4"
          pattern="[0-9]{4}"
          aria-label="Four digit code"
          required
        />
      </label>
    </DemoCard>

    <DemoCard title="Fieldset &amp; label">
      <fieldset class="fieldset rounded-box border border-base-300 p-4">
        <legend class="fieldset-legend">Node settings</legend>
        <label class="label" for="rpc-port">RPC port</label>
        <input id="rpc-port" type="text" class="input w-full" placeholder="19009" />
        <label class="label mt-2 cursor-pointer justify-start gap-2">
          <input type="checkbox" class="toggle toggle-sm toggle-primary" checked />
          Expose over LAN
        </label>
        <p class="label">Restart the node for changes to apply.</p>
      </fieldset>
    </DemoCard>

    <DemoCard title="Validator">
      <input type="email" class="input validator w-full" required placeholder="you@example.com" />
      <p class="validator-hint">Enter a valid email address.</p>
      <input
        type="text"
        class="input validator mt-3 w-full"
        required
        pattern="Q[0-9a-f]{5,}"
        title="A QRL address"
        placeholder="Q0105…"
      />
      <p class="validator-hint">Must start with Q followed by hex.</p>
    </DemoCard>

    <DemoCard title="Join">
      <div class="join">
        <input class="input join-item" placeholder="Search blocks" />
        <select class="select join-item" aria-label="Search scope">
          <option>All</option>
          <option>Blocks</option>
          <option>Txs</option>
        </select>
        <button class="btn btn-primary join-item">Go</button>
      </div>
      <div class="join join-vertical mt-4">
        <button class="btn join-item">Top</button>
        <button class="btn join-item">Middle</button>
        <button class="btn join-item">Bottom</button>
      </div>
    </DemoCard>

    <DemoCard title="Calendar">
      <div class="overflow-x-auto">
        <calendar-date class="cally rounded-box border border-base-300 p-3">
          <svg slot="previous" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
          <svg slot="next" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
      <p class="mt-2 text-sm text-base-content/60">
        daisyUI styles the
        <a class="link link-secondary" href="https://wicky.nillia.ms/cally/" target="_blank" rel="noopener">Cally</a>
        web component.
      </p>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';
</script>
