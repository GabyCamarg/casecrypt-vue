<template>
  <Navbar />

  <section class="banner">
    <img src="/imagem-principal.png" class="bg" />

    <div class="overlay">
      <div class="content">
        <h1>PORTAL DE INVESTIGAÇÃO CRIMINAL</h1>
        <p>Explore casos, suspeitos e evidências.</p>
        <p>Envie denúncias anonimamente.</p>

        <button @click="verCasos">Ver Casos</button>
      </div>
    </div>
  </section>

  <section class="casos-section">
    <h2 class="titulo-secao">Casos recentes</h2>

    <div class="casos-grid">
      <div class="caso-card" v-for="caso in casos" :key="caso.id">
        <img :src="caso.imagem" />

        <div class="caso-info">
          <h3>{{ caso.titulo }}</h3>
          <p>{{ caso.descricao }}</p>

          <div class="botoes">
            <RouterLink to="/suspeitos" class="btn">
              Ver Suspeitos
            </RouterLink>

            <RouterLink to="/Evidencias" class="btn secundario">
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
    descricao: 'Um crime misterioso ocorreu em um hotel de luxo.',
    imagem: '/hotellux.png'
  },
  {
    id: 2,
    titulo: 'Desaparecimento no Parque de Diversões',
    descricao: 'Um desaparecimento misterioso ocorreu em um parque.',
    imagem: '/parqued.png'
  },
  {
    id: 3,
    titulo: 'Assalto no Banco Central',
    descricao: 'Um assalto com reféns ocorreu em um banco.',
    imagem: '/bancocase.png'
  },
  {
    id: 4,
    titulo: 'Assassinato na Floresta',
    descricao: 'Um assassinato misterioso ocorreu em uma floresta.',
    imagem: '/florestacase.png'
  }
]

function verCasos() {
  document
    .querySelector('.casos-section')
    ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.banner {
  position: relative;
  height: 500px;
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
  color: white;
  text-align: center;
}

.content h1 {
  font-size: 3rem;
}

.content p {
  margin-top: 10px;
}

.content button {
  margin-top: 20px;
  padding: 12px 20px;
  background: #8b0000;
  color: white;
  border: none;
  border-radius: 8px;
}

.casos-section {
  padding: 50px;
  background: #f5f5f5;
}

.titulo-secao {
  text-align: center;
  margin-bottom: 30px;
}

.casos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 20px;
}

.caso-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0,0,0,.2);
}

.caso-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.caso-info {
  padding: 20px;
}

.botoes {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn {
  background: #1f2937;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
}

.secundario {
  background: #374151;
}
</style>