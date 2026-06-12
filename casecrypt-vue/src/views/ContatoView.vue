<template>
    <div>
        <h1> Contato </h1>

        <form @submit.prevent="enviar">
            <div>
                <label> Nome: </label>
                <input type="text" v-model="nome"/>
            </div>
            <div>
                <label> Email: </label>
                <input type="email" v-model="email"/>
            </div>

            <button type="submit"> Enviar </button>
        </form>

        <p v-if = "erro" style="color:red">
            Mensagem enviada com sucesso!
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nome = ref('');
const email = ref('');
const enviado = ref(false);
const erro = ref(false);

function enviar() {
    if (!nome.value && email.value) {
        erro.value = true;
        enviado.value = false;
        return
    }
    erro.value = false;
    enviado.value = true;
}
</script>
