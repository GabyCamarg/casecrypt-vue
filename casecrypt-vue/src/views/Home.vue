<template>
  <Navbar />

  <section class="banner">
    <img src="/imagem-principal.png" class="bg" />

    <div class="overlay">
      <div class="content">
        <h1>PORTAL DE INVESTIGAÇÃO CRIMINAL</h1>
        <p>Explore casos, suspeitos e evidências.</p>
        <p>Envie denúncias anonimamente.</p>
      </div>
    </div>
  </section>

  <section class="casos-section">

    <h2 class="titulo-secao">Casos recentes</h2>

    <div class="casos-grid">

      <div
        class="caso-card"
        v-for="caso in casos"
        :key="caso.id"
      >
        <img :src="caso.imagem" />

        <div class="caso-info">
          <h3>{{ caso.titulo }}</h3>

          <p>{{ caso.descricao }}</p>

          <div class="botoes">
            <RouterLink
              to="/suspeitos"
              class="btn"
            >
              Ver Suspeitos
            </RouterLink>

            <RouterLink
              to="/evidencias"
              class="btn secundario"
            >
              Ver Evidências
            </RouterLink>
          </div>
        </div>

      </div>

    </div>

  </section>

  <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const casos = [
  {
    id: 1,
    titulo: 'Assassinato no Hotel Lux',
    descricao:
      'Um crime misterioso ocorreu em um hotel de luxo. Poucas pistas foram encontradas.',
    imagem: '/hotellux.png'
  },
  {
    id: 2,
    titulo: 'Desaparecimento no Parque',
    descricao:
      'Um desaparecimento misterioso ocorreu em um parque de diversões.',
    imagem: '/parqued.png'
  },
  {
    id: 3,
    titulo: 'Assalto no Banco Central',
    descricao:
      'Um assalto com reféns ocorreu em um banco de luxo.',
    imagem: '/bancocase.png'
  },
  {
    id: 4,
    titulo: 'Assassinato na Floresta',
    descricao:
      'Um assassinato misterioso ocorreu em uma floresta local.',
    imagem: '/florestacase.png'
  }
]
</script>