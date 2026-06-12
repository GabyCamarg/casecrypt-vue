<template>
  <div class="card">
    <img :src="evidencia.imagem" class="imagem" />

    <h3>{{ evidencia.titulo }}</h3>

    <p>{{ evidencia.descricao }}</p>

    <button @click="$emit('ver-detalhes')">
      Ver detalhes
    </button>
  </div>
</template>

<script setup>
defineProps({
  evidencia: Object
})

defineEmits(['ver-detalhes'])
</script>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,.15);
}

.imagem {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

h3 {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #8b0000;
  color: white;
  cursor: pointer;
}
</style>