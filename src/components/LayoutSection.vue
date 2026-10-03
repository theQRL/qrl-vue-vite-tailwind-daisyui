<template>
  <SectionBlock
    id="layout"
    eyebrow="Layout"
    title="Layout &amp; mockups"
    blurb="Containers, arrangement helpers and the mockup frames."
  >
    <DemoCard title="Divider">
      <div class="flex flex-col">
        <div class="grid h-14 place-items-center rounded-box bg-base-200">above</div>
        <div class="divider">OR</div>
        <div class="grid h-14 place-items-center rounded-box bg-base-200">below</div>
      </div>
      <div class="divider divider-primary">primary</div>
      <div class="divider divider-start divider-accent">start</div>
      <div class="flex h-20 w-full">
        <div class="grid grow place-items-center rounded-box bg-base-200">left</div>
        <div class="divider divider-horizontal">or</div>
        <div class="grid grow place-items-center rounded-box bg-base-200">right</div>
      </div>
    </DemoCard>

    <DemoCard title="Hero">
      <div class="hero rounded-box bg-base-200 py-10">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h4 class="text-2xl font-bold">Run a node</h4>
            <p class="py-3 text-sm text-base-content/70">Join the network in about ten minutes.</p>
            <button class="btn btn-primary btn-sm">Get started</button>
          </div>
        </div>
      </div>

      <div class="hero mt-4 h-40 overflow-hidden rounded-box" :style="heroBg">
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content">
          <h4 class="text-xl font-bold">With hero-overlay</h4>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Indicator">
      <div class="flex flex-wrap items-center gap-8 p-4">
        <div class="indicator">
          <span class="indicator-item badge badge-primary">12</span>
          <div class="grid h-16 w-24 place-items-center rounded-box bg-base-200 text-sm">inbox</div>
        </div>
        <div class="indicator">
          <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">new</span>
          <div class="grid h-16 w-24 place-items-center rounded-box bg-base-200 text-sm">start</div>
        </div>
        <div class="indicator">
          <span class="indicator-item indicator-middle indicator-center badge badge-accent">mid</span>
          <div class="grid h-16 w-24 place-items-center rounded-box bg-base-200 text-sm"></div>
        </div>
        <div class="indicator">
          <span class="indicator-item status status-success"></span>
          <button class="btn">Node</button>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Stack">
      <div class="flex flex-wrap gap-8 p-2">
        <div class="stack size-28">
          <div class="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
          <div class="grid place-content-center rounded-box bg-secondary text-secondary-content">2</div>
          <div class="grid place-content-center rounded-box bg-accent text-accent-content">3</div>
        </div>
        <div class="stack stack-bottom size-28">
          <div class="grid place-content-center rounded-box bg-base-300">bottom</div>
          <div class="grid place-content-center rounded-box bg-base-200">stack</div>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Drawer">
      <div class="drawer h-64 overflow-hidden rounded-box border border-base-300">
        <input id="qrl-demo-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content grid place-items-center bg-base-200">
          <label for="qrl-demo-drawer" class="btn drawer-button btn-primary">Open drawer</label>
        </div>
        <div class="drawer-side">
          <label for="qrl-demo-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu min-h-full w-56 bg-base-100 p-4">
            <li class="menu-title">Sidebar</li>
            <li><a>Blocks</a></li>
            <li><a>Transactions</a></li>
            <li><a>Validators</a></li>
          </ul>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Footer">
      <footer class="footer sm:footer-horizontal rounded-box bg-base-200 p-6">
        <nav>
          <h6 class="footer-title">Network</h6>
          <a class="link link-hover">Explorer</a>
          <a class="link link-hover">Validators</a>
        </nav>
        <nav>
          <h6 class="footer-title">Build</h6>
          <a class="link link-hover">API</a>
          <a class="link link-hover">SDKs</a>
        </nav>
      </footer>
      <footer class="footer footer-center mt-3 rounded-box bg-base-200 p-4 text-sm">
        <aside><p>footer-center</p></aside>
      </footer>
    </DemoCard>

    <DemoCard title="Browser mockup">
      <div class="mockup-browser w-full border border-base-300 bg-base-200">
        <div class="mockup-browser-toolbar">
          <div class="input">https://theqrl.org</div>
        </div>
        <div class="grid h-28 place-content-center bg-base-100 text-sm">Page content</div>
      </div>
    </DemoCard>

    <DemoCard title="Window mockup">
      <div class="mockup-window w-full border border-base-300 bg-base-200">
        <div class="grid h-28 place-content-center bg-base-100 text-sm">Window content</div>
      </div>
    </DemoCard>

    <DemoCard title="Code mockup">
      <div class="mockup-code w-full">
        <pre data-prefix="$"><code>npm create vite@latest</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing…</code></pre>
        <pre data-prefix=">" class="text-success"><code>ready in 149 ms</code></pre>
      </div>
    </DemoCard>

    <DemoCard title="Phone mockup">
      <div class="overflow-x-auto">
        <div class="mockup-phone border-base-300">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display grid place-content-center bg-base-200">
            <span class="text-sm opacity-60">theQRL wallet</span>
          </div>
        </div>
      </div>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';

const heroBg = {
  backgroundImage: 'url(https://picsum.photos/id/1039/800/300)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
</script>
