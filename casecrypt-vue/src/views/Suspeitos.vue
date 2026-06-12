<template>
  <Navbar />

  <section class="container">
    <h1>Suspeitos</h1>

    <input
      v-model="busca"
      placeholder="Buscar suspeito..."
    />

    <div class="suspeitos-grid">
      <div
        class="suspeito-card"
        v-for="suspeito in filtrados"
        :key="suspeito.id"
      >
        <img :src="suspeito.imagem">

        <div class="suspeito-info">
          <h3>{{ suspeito.nome }}</h3>
          <p>{{ suspeito.descricao }}</p>

          <button @click="investigar(suspeito.nome)">
            Investigar
          </button>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const busca = ref('')

const suspeitos = ref([
  {
    id: 1,
    nome: 'João Silva',
    descricao: 'Histórico suspeito e ligação com o local.',
    imagem: '/Suspeito1.png'
  },
  {
    id: 2,
    nome: 'Maria Souza',
    descricao: 'Vista no horário do crime.',
    imagem: '/suspeita3.png'
  },
  {
    id: 3,
    nome: 'Carlos Mendes',
    descricao: 'Conflitos com a vítima.',
    imagem: '/suspeito2.png'
  }
])

const filtrados = computed(() =>
  suspeitos.value.filter(s =>
    s.nome.toLowerCase().includes(busca.value.toLowerCase())
  )
)

function investigar(nome) {
  alert(`Investigando: ${nome}`)
}
</script>

<style scoped>
.container {
  padding: 40px;
}

h1 {
  text-align: center;
}

input {
  width: 300px;
  padding: 12px;
  display: block;
  margin: 20px auto;
}

.suspeitos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 20px;
}

.suspeito-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,.2);
}

.suspeito-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.suspeito-info {
  padding: 15px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  background: #8b0000;
  color: white;
  border: none;
  border-radius: 8px;
}
</style>