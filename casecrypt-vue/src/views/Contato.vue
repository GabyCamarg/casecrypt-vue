<template>
  <Navbar />

  <div class="contato-container">
    <h1>Contato</h1>

    <form @submit.prevent="enviar" class="formulario">
      <div>
        <label>Nome:</label>
        <input type="text" v-model="nome" />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>

      <button type="submit">Enviar</button>
    </form>

    <p v-if="enviado" class="sucesso">
      Mensagem enviada com sucesso!
    </p>

    <p v-if="erro" class="erro">
      Preencha todos os campos!
    </p>
  </div>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const nome = ref('')
const email = ref('')
const enviado = ref(false)
const erro = ref(false)

function enviar() {
  if (!nome.value || !email.value) {
    erro.value = true
    enviado.value = false
    return
  }

  erro.value = false
  enviado.value = true

  nome.value = ''
  email.value = ''
}
</script>

<style scoped>
.contato-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background: #8b0000;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.sucesso {
  color: green;
  text-align: center;
  margin-top: 20px;
}

.erro {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>