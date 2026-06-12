<template>
  <div class="overlay">
    <div class="modal">
      <button class="fechar" @click="$emit('fechar')">
        ✖
      </button>

      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(['fechar'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
}

.fechar {
  float: right;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}
</style>