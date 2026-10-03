<template>
  <SectionBlock
    id="data-display"
    eyebrow="Data display"
    title="Data display"
    blurb="Everything that presents information rather than collecting it."
  >
    <DemoCard title="Accordion">
      <div class="join join-vertical w-full">
        <div v-for="(item, i) in faq" :key="item.q" class="collapse-arrow join-item collapse border border-base-300">
          <input type="radio" name="qrl-accordion" :checked="i === 0" />
          <div class="collapse-title font-semibold">{{ item.q }}</div>
          <div class="collapse-content text-sm">{{ item.a }}</div>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Collapse">
      <div tabindex="0" class="collapse-plus collapse border border-base-300">
        <div class="collapse-title font-semibold">Click to expand</div>
        <div class="collapse-content text-sm">Focusable via <kbd class="kbd kbd-xs">Tab</kbd>.</div>
      </div>
      <div class="collapse-open collapse mt-3 border border-base-300">
        <div class="collapse-title font-semibold">Forced open</div>
        <div class="collapse-content text-sm">Using <code class="font-mono">collapse-open</code>.</div>
      </div>
    </DemoCard>

    <DemoCard title="Avatar">
      <div class="flex flex-wrap items-center gap-3">
        <div class="avatar">
          <div class="w-12 rounded-full"><img :src="face(1027)" alt="Avatar" /></div>
        </div>
        <div class="avatar avatar-online">
          <div class="w-12 rounded-full"><img :src="face(1005)" alt="Avatar, online" /></div>
        </div>
        <div class="avatar avatar-offline">
          <div class="w-12 rounded-full"><img :src="face(1012)" alt="Avatar, offline" /></div>
        </div>
        <div class="avatar avatar-placeholder">
          <div class="w-12 rounded-full bg-neutral text-neutral-content"><span>QRL</span></div>
        </div>
        <div class="avatar">
          <div class="mask mask-squircle w-12"><img :src="face(1025)" alt="Squircle avatar" /></div>
        </div>
      </div>
      <div class="avatar-group -space-x-5 mt-4">
        <div v-for="id in [1074, 1062, 1054]" :key="id" class="avatar">
          <div class="w-10"><img :src="face(id)" alt="Group member" /></div>
        </div>
        <div class="avatar avatar-placeholder">
          <div class="w-10 bg-neutral text-neutral-content"><span>+9</span></div>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Badge">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge">default</span>
        <span class="badge badge-primary">primary</span>
        <span class="badge badge-secondary">secondary</span>
        <span class="badge badge-accent">accent</span>
        <span class="badge badge-info">info</span>
        <span class="badge badge-success">success</span>
        <span class="badge badge-warning">warning</span>
        <span class="badge badge-error">error</span>
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-2">
        <span class="badge badge-outline">outline</span>
        <span class="badge badge-dash">dash</span>
        <span class="badge badge-soft">soft</span>
        <span class="badge badge-ghost">ghost</span>
        <span class="badge badge-xs">xs</span>
        <span class="badge badge-sm">sm</span>
        <span class="badge badge-lg">lg</span>
        <span class="badge badge-xl">xl</span>
      </div>
    </DemoCard>

    <DemoCard title="Card">
      <div class="card card-border bg-base-200">
        <figure><img :src="shot(1005, 600, 220)" alt="Placeholder" /></figure>
        <div class="card-body">
          <h4 class="card-title">
            Block 4,912,507
            <span class="badge badge-secondary badge-sm">new</span>
          </h4>
          <p class="text-sm text-base-content/70">Sealed 42 seconds ago.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">Inspect</button>
          </div>
        </div>
      </div>
      <div class="card card-side card-border mt-4 bg-base-200">
        <figure class="w-24 shrink-0"><img :src="shot(1015, 200, 200)" alt="Placeholder" /></figure>
        <div class="card-body p-4">
          <h4 class="card-title text-base">card-side</h4>
          <p class="text-sm text-base-content/70">Image beside the body.</p>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Carousel">
      <div class="carousel rounded-box w-full">
        <div v-for="id in [1043, 1039, 1044, 1033]" :key="id" class="carousel-item w-full">
          <img :src="shot(id, 600, 260)" class="w-full object-cover" alt="Carousel slide" />
        </div>
      </div>
      <p class="mt-2 text-sm text-base-content/60">Scroll horizontally.</p>
    </DemoCard>

    <DemoCard title="Chat">
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-8 rounded-full"><img :src="face(1027)" alt="Sender" /></div>
        </div>
        <div class="chat-header">Anon <time class="text-xs opacity-50">12:45</time></div>
        <div class="chat-bubble">Is the ledger post-quantum secure?</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-8 rounded-full"><img :src="face(1005)" alt="Recipient" /></div>
        </div>
        <div class="chat-bubble chat-bubble-primary">XMSS signatures — yes.</div>
        <div class="chat-footer opacity-50">Seen</div>
      </div>
    </DemoCard>

    <DemoCard title="Countdown">
      <span class="countdown font-mono text-3xl">
        <span :style="{ '--value': clock.h }" aria-live="polite" :aria-label="String(clock.h)">{{ clock.h }}</span
        >: <span :style="{ '--value': clock.m }" aria-live="polite" :aria-label="String(clock.m)">{{ clock.m }}</span
        >:
        <span :style="{ '--value': clock.s }" aria-live="polite" :aria-label="String(clock.s)">{{ clock.s }}</span>
      </span>
    </DemoCard>

    <DemoCard title="Diff">
      <figure class="diff aspect-16/9 rounded-box">
        <div class="diff-item-1" role="img" aria-label="Colour version">
          <img :src="shot(1074, 600, 340)" alt="Colour" />
        </div>
        <div class="diff-item-2" role="img" aria-label="Greyscale version">
          <img :src="shot(1074, 600, 340)" class="grayscale" alt="Greyscale" />
        </div>
        <div class="diff-resizer"></div>
      </figure>
    </DemoCard>

    <DemoCard title="Kbd">
      <div class="flex flex-wrap items-center gap-2">
        <kbd class="kbd kbd-xs">xs</kbd>
        <kbd class="kbd kbd-sm">sm</kbd>
        <kbd class="kbd">md</kbd>
        <kbd class="kbd kbd-lg">lg</kbd>
        <kbd class="kbd kbd-xl">xl</kbd>
      </div>
      <p class="mt-3 text-sm">Press <kbd class="kbd kbd-sm">⌘</kbd> + <kbd class="kbd kbd-sm">K</kbd> to search.</p>
    </DemoCard>

    <DemoCard title="List">
      <ul class="list rounded-box bg-base-200">
        <li class="p-4 pb-2 text-xs tracking-wide opacity-60">Most active addresses</li>
        <li v-for="(a, i) in addresses" :key="a.id" class="list-row">
          <div class="text-4xl font-thin tabular-nums opacity-30">{{ i + 1 }}</div>
          <div><img class="size-10 rounded-box" :src="face(a.id)" alt="" /></div>
          <div class="list-col-grow">
            <div class="font-mono text-sm">{{ a.addr }}</div>
            <div class="text-xs font-semibold uppercase opacity-60">{{ a.txs }} txs</div>
          </div>
          <button class="btn btn-square btn-ghost" aria-label="Open address">→</button>
        </li>
      </ul>
    </DemoCard>

    <DemoCard title="Mask">
      <div class="flex flex-wrap gap-2">
        <img v-for="m in masks" :key="m" :class="`mask ${m} size-14`" :src="shot(1035, 120, 120)" :alt="m" />
      </div>
    </DemoCard>

    <DemoCard title="Stat">
      <div class="stats stats-vertical w-full border border-base-300">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6-6 4 4 7-7" />
            </svg>
          </div>
          <div class="stat-title">Block height</div>
          <div class="stat-value text-primary">4.9M</div>
          <div class="stat-desc">↗︎ 1,440 today</div>
        </div>
        <div class="stat">
          <div class="stat-title">Signature scheme</div>
          <div class="stat-value text-2xl">XMSS</div>
          <div class="stat-desc">Hash-based, stateful</div>
          <div class="stat-actions"><button class="btn btn-xs">Details</button></div>
        </div>
      </div>
    </DemoCard>

    <DemoCard title="Status">
      <div class="flex flex-wrap items-center gap-4">
        <span class="inline-flex items-center gap-2 text-sm"><span class="status status-success"></span> synced</span>
        <span class="inline-flex items-center gap-2 text-sm"
          ><span class="status status-warning"></span> catching up</span
        >
        <span class="inline-flex items-center gap-2 text-sm"><span class="status status-error"></span> offline</span>
      </div>
      <div class="mt-3 flex flex-wrap items-center gap-2">
        <span class="status status-xs status-primary"></span>
        <span class="status status-sm status-primary"></span>
        <span class="status status-md status-primary"></span>
        <span class="status status-lg status-primary"></span>
        <span class="status status-xl status-primary"></span>
      </div>
    </DemoCard>

    <DemoCard title="Table">
      <div class="overflow-x-auto">
        <table class="table-zebra table-sm table">
          <thead>
            <tr>
              <th></th>
              <th>Height</th>
              <th>Txs</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(b, i) in blocks" :key="b.height">
              <th>{{ i + 1 }}</th>
              <td class="font-mono">{{ b.height }}</td>
              <td>{{ b.txs }}</td>
              <td>{{ b.age }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DemoCard>

    <DemoCard title="Timeline">
      <ul class="timeline timeline-vertical timeline-compact">
        <li v-for="(e, i) in events" :key="e.year">
          <hr v-if="i > 0" />
          <div class="timeline-middle">
            <svg class="size-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.9-10.2a1 1 0 00-1.5-1.3l-3.3 3.9-1.5-1.5A1 1 0 006 10.3l2.3 2.3a1 1 0 001.5-.1l4.1-4.7z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">
            <time class="font-mono text-xs opacity-60">{{ e.year }}</time>
            <div class="text-sm font-semibold">{{ e.what }}</div>
          </div>
          <hr v-if="i < events.length - 1" />
        </li>
      </ul>
    </DemoCard>

    <DemoCard title="Hover gallery">
      <figure class="hover-gallery max-w-60 rounded-box">
        <img v-for="id in [1043, 1039, 1044, 1033]" :key="id" :src="shot(id, 400, 300)" alt="Gallery frame" />
      </figure>
      <p class="mt-2 text-sm text-base-content/60">Move the pointer across the image.</p>
    </DemoCard>

    <DemoCard title="Hover 3D">
      <div class="hover-3d mx-2 my-6">
        <figure class="max-w-60 overflow-hidden rounded-2xl">
          <img :src="shot(1069, 400, 250)" alt="Tilting card" />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </DemoCard>

    <DemoCard title="Text rotate">
      <span class="text-rotate font-display text-2xl font-bold">
        <span>
          <span>QUANTUM</span>
          <span>RESISTANT</span>
          <span>LEDGER</span>
        </span>
      </span>
    </DemoCard>

    <DemoCard title="Aura">
      <div class="aura aura-glow aura-md text-primary">
        <button class="btn btn-primary btn-lg">Run a node</button>
      </div>
      <p class="mt-4 text-sm text-base-content/60">One aura per page — it is meant to be the loudest thing on it.</p>
    </DemoCard>
  </SectionBlock>
</template>

<script setup>
import { onMounted, onUnmounted, reactive } from 'vue';
import SectionBlock from './SectionBlock.vue';
import DemoCard from './DemoCard.vue';

const face = (id) => `https://picsum.photos/id/${id}/120/120`;
const shot = (id, w, h) => `https://picsum.photos/id/${id}/${w}/${h}`;

const faq = [
  { q: 'What signs a QRL transaction?', a: 'XMSS, a hash-based scheme with no reliance on discrete logs.' },
  { q: 'Why does that matter?', a: "Shor's algorithm breaks ECDSA; it does not break hash-based signatures." },
  { q: 'Is the key reusable?', a: 'XMSS is stateful — each one-time key index may be used exactly once.' },
];

const masks = ['mask-squircle', 'mask-hexagon', 'mask-heart', 'mask-star-2', 'mask-triangle', 'mask-decagon'];

const addresses = [
  { id: 1027, addr: 'Q0105…8f3a', txs: '12,904' },
  { id: 1012, addr: 'Q0103…b71c', txs: '9,455' },
  { id: 1025, addr: 'Q0106…2de0', txs: '7,118' },
];

const blocks = [
  { height: '4,912,507', txs: 41, age: '42s' },
  { height: '4,912,506', txs: 18, age: '1m 42s' },
  { height: '4,912,505', txs: 63, age: '2m 42s' },
];

const events = [
  { year: '2016', what: 'Whitepaper published' },
  { year: '2018', what: 'Mainnet launch' },
  { year: '2024', what: 'Zond testnet' },
];

const clock = reactive({ h: 0, m: 0, s: 0 });
let timer;

function tick() {
  const now = new Date();
  clock.h = now.getHours();
  clock.m = now.getMinutes();
  clock.s = now.getSeconds();
}

onMounted(() => {
  tick();
  timer = setInterval(tick, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>
