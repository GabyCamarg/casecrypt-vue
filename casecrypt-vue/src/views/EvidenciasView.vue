<script setup lang="ts">
import { ref, computed } from 'vue';
import EvidenciaCard from './componentes/EvidenciaCard.vue'
import Modal from '../componentes/Modal.vue'

const filtro = ref('');
const modalAberto = ref(false);

const evidenciaSelecionada = ref<any>(null);

const evidencias = ref([
  { titulo: 'Cena do Crime', descricao: 'Local encontrado com pistas importantes.' },
  { titulo: 'Arma do Crime', descricao: 'Objeto encontrado no local do crime.' },
  { titulo: 'Fotos do Crime', descricao: 'Registros fotográficos do local do crime.' },
]);

const evidenciasFiltradas = computed(() => {
  return evidencias.value.filter(e =>
    e.titulo.toLowerCase().includes(filtro.value.toLowerCase())
  );
});

function abrirModal(item: any) {
  evidenciaSelecionada.value = item;
  modalAberto.value = true;
}
</script>

<template>
  <div class="container">
    <h1>Evidências</h1>

    <input
      v-model="filtro"
      placeholder="Filtrar evidências..."
      class="input"
    />
  </div>

  <div class="grid">
    <EvidenciaCard
      v-for="(item, index) in evidenciasFiltradas"
      :key="index"
      :evidencia="item"
      @ver-detalhes="abrirModal(item)"
    />
  </div>

  <Modal v-if="modalAberto" @fechar="modalAberto = false">
    <h2>{{ evidenciaSelecionada?.titulo }}</h2>
    <p>{{ evidenciaSelecionada?.descricao }}</p>
  </Modal>
</template>