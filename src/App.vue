<template>
 <!-- buttons -->
  <div class="p-4">
    <button class="btn btn-primary">primary</button> 
    <button class="btn btn-secondary">secondary</button> 
    <button class="btn btn-accent">accent</button>
  </div>

  <!-- same buttons with another theme! -->
  <div class="p-4" data-theme="cupcake">
    <button class="btn btn-primary">primary</button> 
    <button class="btn btn-secondary">secondary</button> 
    <button class="btn btn-accent">accent</button>
  </div>

  <!-- tab -->
  <div class="p-4 tabs">
    <button class="tab tab-lifted">Tab 1</button>
    <button class="tab tab-lifted tab-active">Tab 2</button>
    <button class="tab tab-lifted">Tab 3</button>
  </div>

  <!-- toggle -->
  <div class="p-4">
    <input type="checkbox" class="toggle toggle-primary"> 
    <input type="checkbox" class="toggle toggle-secondary"> 
    <input type="checkbox" class="toggle toggle-accent"> 
  </div>

  <!-- card -->
  <div class="card shadow w-80 m-4">
    <figure>
      <img src="https://picsum.photos/id/1005/500/250"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">DaisyUI Card</h2>
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p> 
    </div>
  </div>


  <!-- dropdown -->
  <details class="dropdown m-4">
    <summary class="m-1 btn">open / close</summary>
    <ul class="p-2 menu dropdown-content bg-base-200 z-[2] rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>

  <!-- Open the modal using ID.showModal() method -->
    <button
      class="btn"
      @click="toggleModal">
      Toggle modal
    </button>

    <div
      class="modal"
      :class="{ 'modal-open': showModal }">
      <form method="dialog" class="modal-box">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="toggleModal">✕</button>
        <p class="py-4">Click the close button or press escape to close this modal.</p>
        <div class="modal-action">
          <button
            class="btn btn-primary"
            @click="toggleModal">
            Close modal
          </button>
        </div>
      </form>
    </div>

  <!-- steps -->
  <ul class="steps my-4 w-full">
    <li class="step step-primary">Register</li> 
    <li class="step step-primary">Choose plan</li> 
    <li class="step">Purchase</li> 
    <li class="step">Receive Product</li>
  </ul>

  <!-- chat bubble -->
  <div class="chat chat-start m-4">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="chat-bubble">
      see all components <a class="link" target="_blank" href="https://daisyui.com/components">Here</a> 
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const showModal = ref(false);

function toggleModal(): void {
  showModal.value = !showModal.value;
  if (showModal.value) {
    // add esc event listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        showModal.value = false;
      }
    });
  }
}

</script>