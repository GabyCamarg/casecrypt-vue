<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import EvidenciaCard from '@/components/EvidenciaCard.vue'
import Modal from '@/components/Modal.vue'

const filtro = ref('')
const modalAberto = ref(false)

const evidenciaSelecionada = ref<any>(null)

const evidencias = ref([
  {
    titulo: 'Cena do Crime',
    descricao: 'Local encontrado com pistas importantes.',
    imagem: '/img4.png.jpeg'
  },
  {
    titulo: 'Arma do Crime',
    descricao: 'Objeto encontrado no local do crime.',
    imagem: '/img3.png.jpeg'
  },
  {
    titulo: 'Fotos do Crime',
    descricao: 'Registros fotográficos do local do crime.',
    imagem: '/img2.png.jpeg'
  }
])

const evidenciasFiltradas = computed(() => {
  return evidencias.value.filter(e =>
    e.titulo.toLowerCase().includes(filtro.value.toLowerCase())
  )
})

function abrirModal(item: any) {
  evidenciaSelecionada.value = item
  modalAberto.value = true
}
</script>

<template>
  <Navbar />

  <section class="banner">
    <img src="/imagem-principal.png" class="bg" />

    <div class="overlay">
      <div class="content">
        <h1>EVIDÊNCIAS</h1>
        <p>Analise as evidências coletadas durante a investigação.</p>
      </div>
    </div>
  </section>

  <section class="container">
    <input
      v-model="filtro"
      placeholder="Pesquisar evidência..."
      class="input"
    />

    <div class="grid">
      <EvidenciaCard
        v-for="(item, index) in evidenciasFiltradas"
        :key="index"
        :evidencia="item"
        @ver-detalhes="abrirModal(item)"
      />
    </div>
  </section>

  <Modal v-if="modalAberto" @fechar="modalAberto = false">
    <img
      :src="evidenciaSelecionada?.imagem"
      class="modal-img"
    />

    <h2>{{ evidenciaSelecionada?.titulo }}</h2>

    <p>{{ evidenciaSelecionada?.descricao }}</p>
  </Modal>

  <Footer />
</template>

<style scoped>
.banner {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.55);

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  color: white;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.container {
  padding: 40px;
  max-width: 1200px;
  margin: auto;
}

.input {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto 30px auto;

  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.modal-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}
</style>