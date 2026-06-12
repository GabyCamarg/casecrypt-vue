<template>
  <Navbar />

  <section class="banner">
    <img src="/imagem-principal.png" class="bg" />

    <div class="overlay">
      <div class="content">
        <h1>SUSPEITOS</h1>
        <p>Explore os suspeitos do caso.</p>
      </div>
    </div>
  </section>

  <section class="casos-section">

    <input
      class="campo-busca"
      v-model="busca"
      placeholder="Buscar suspeito..."
    />

    <div class="suspeitos-grid">

      <div
        class="suspeito-card"
        v-for="suspeito in suspeitosFiltrados"
        :key="suspeito.id"
      >
        <img :src="suspeito.imagem" />

        <div class="suspeito-info">
          <h3>{{ suspeito.nome }}</h3>

          <p>{{ suspeito.descricao }}</p>

          <button
            class="btn"
            @click="investigar(suspeito.nome)"
          >
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
    descricao: 'Histórico suspeito e ligação com o local do crime.',
    imagem: '/Suspeito1.png'
  },
  {
    id: 2,
    nome: 'Maria Souza',
    descricao: 'Vista nas proximidades no horário do ocorrido.',
    imagem: '/suspeita3.png'
  },
  {
    id: 3,
    nome: 'Carlos Mendes',
    descricao: 'Possui histórico de conflitos com a vítima.',
    imagem: '/suspeito2.png'
  },
  {
    id: 4,
    nome: 'Ana Ribeiro',
    descricao: 'Relacionamento desconhecido com o caso.',
    imagem: '/suspeita5.png'
  },
  {
    id: 5,
    nome: 'Lucas Alves',
    descricao: 'Movimentação suspeita registrada.',
    imagem: '/suspeito4.png'
  },
  {
    id: 6,
    nome: 'Fernanda Lima',
    descricao: 'Possível ligação indireta com o crime.',
    imagem: '/suspeita6.png'
  }
])

const suspeitosFiltrados = computed(() => {
  return suspeitos.value.filter((s) =>
    s.nome.toLowerCase().includes(busca.value.toLowerCase())
  )
})

function investigar(nome) {
  alert(`Investigando ${nome}`)
}
</script>