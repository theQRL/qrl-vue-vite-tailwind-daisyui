<template>
  <SectionBlock id="navigation" eyebrow="Navigation" title="Navigation" blurb="Menus, tabs and wayfinding.">
    <DemoCard title="Breadcrumbs">
      <div class="breadcrumbs text-sm">
        <ul>
          <li><a>Explorer</a></li>
          <li><a>Blocks</a></li>
          <li>4,912,507</li>
        </ul>
      </div>
    </DemoCard>

    <DemoCard title="Link">
      <div class="flex flex-wrap gap-3 text-sm">
        <a class="link">default</a>
        <a class="link link-primary">primary</a>
        <a class="link link-secondary">secondary</a>
        <a class="link link-accent">accent</a>
        <a class="link link-success">success</a>
        <a class="link link-warning">warning</a>
        <a class="link link-error">error</a>
        <a class="link link-hover">hover only</a>
      </div>
    </DemoCard>

    <DemoCard title="Menu">
      <ul class="menu w-full rounded-box bg-base-200">
        <li class="menu-title">Network</li>
        <li><a class="menu-active">Blocks</a></li>
        <li><a>Transactions</a></li>
        <li>
          <details open>
            <summary>Tools</summary>
            <ul>
              <li><a>Wallet</a></li>
              <li><a>Node status</a></li>
            </ul>
          </details>
        </li>
        <li><a class="menu-disabled">Archived</a></li>
      </ul>
      <ul class="menu menu-horizontal mt-3 rounded-box bg-base-200">
        <li><a>Docs</a></li>
        <li><a>API</a></li>
        <li><a>Support</a></li>
      </ul>
    </DemoCard>

    <DemoCard title="Navbar">
      <div class="navbar rounded-box bg-base-200">
        <div class="navbar-start">
          <a class="btn btn-ghost text-lg">QRL</a>
        </div>
        <div class="navbar-center hidden sm:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Explorer</a></li>
            <li><a>Wallet</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <button class="btn btn-square btn-ghost" aria-label="Notifications">
            <div class="indicator">
              <span class="indicator-item badge badge-xs badge-error"></span>
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Pagination">
      <div class="join">
        <button class="join-item btn">«</button>
        <button class="join-item btn">1</button>
        <button class="join-item btn btn-active">2</button>
        <button class="join-item btn">3</button>
        <button class="join-item btn btn-disabled">…</button>
        <button class="join-item btn">99</button>
        <button class="join-item btn">»</button>
      </div>
    </DemoCard>

    <DemoCard title="Steps">
      <ul class="steps w-full">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Fund</li>
        <li class="step">Transact</li>
        <li class="step">Settle</li>
      </ul>
      <ul class="steps steps-vertical mt-4">
        <li class="step step-success" data-content="✓">Key generated</li>
        <li class="step step-success" data-content="✓">Address derived</li>
        <li class="step step-error" data-content="!">Broadcast failed</li>
      </ul>
    </DemoCard>

    <DemoCard title="Tab">
      <div role="tablist" class="tabs tabs-lift">
        <button role="tab" class="tab">Overview</button>
        <button role="tab" class="tab tab-active">Details</button>
        <button role="tab" class="tab">Activity</button>
      </div>

      <div role="tablist" class="tabs tabs-box mt-4">
        <button role="tab" class="tab">Box</button>
        <button role="tab" class="tab tab-active">Style</button>
      </div>

      <div role="tablist" class="tabs tabs-border mt-4">
        <input type="radio" name="tabs-radio" class="tab" aria-label="Raw" checked />
        <div class="tab-content border-base-300 p-4 text-sm">Radio inputs swap the panel.</div>
        <input type="radio" name="tabs-radio" class="tab" aria-label="Decoded" />
        <div class="tab-content border-base-300 p-4 text-sm">This is the second panel.</div>
      </div>
    </DemoCard>

    <DemoCard title="Megamenu">
      <button class="btn sm:hidden" popovertarget="qrl-megamenu">Menu</button>
      <div
        class="megamenu megamenu-sm max-sm:megamenu-vertical rounded-box border border-base-300 p-2"
        id="qrl-megamenu"
        popover
      >
        <span class="megamenu-active"></span>

        <button popovertarget="mm-network">Network</button>
        <div id="mm-network" popover>
          <ul class="menu w-56">
            <li><a>Blocks</a></li>
            <li><a>Transactions</a></li>
            <li><a>Validators</a></li>
          </ul>
        </div>

        <button popovertarget="mm-build">Build</button>
        <div id="mm-build" popover>
          <ul class="menu w-56">
            <li><a>API reference</a></li>
            <li><a>SDKs</a></li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-base-content/60">
        Horizontal above <code class="font-mono">sm</code>; the button opens it below.
      </p>
    </DemoCard>

    <DemoCard title="Dock">
      <div class="overflow-x-auto">
        <div class="mockup-phone border-base-300">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display relative grid place-items-center bg-base-200 text-sm">
            <span class="opacity-60">App content</span>
            <div class="dock dock-sm absolute!">
              <button>
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 11l9-8 9 8M5 10v10h14V10" />
                </svg>
                <span class="dock-label">Home</span>
              </button>
              <button class="dock-active">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="11" cy="11" r="7" />
                  <path stroke-linecap="round" d="M20 20l-4-4" />
                </svg>
                <span class="dock-label">Search</span>
              </button>
              <button>
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="8" r="3.5" />
                  <path stroke-linecap="round" d="M4.5 20a7.5 7.5 0 0115 0" />
                </svg>
                <span class="dock-label">Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-3 text-sm text-base-content/60">
        A dock is normally <code class="font-mono">fixed</code> to the viewport; pinned here so it stays in its mockup.
      </p>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';
</script>
