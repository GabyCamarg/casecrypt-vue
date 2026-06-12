<script setup lang="ts">
import EvidenciaCard from '@/componentes/EvidenciaCard.vue';

</script>

<template>
    <div class="container">
        <h1>Evidencias</h1>

        <input
        v-model="filtro"
        placeholder="Filtrar evidencias..."
        class="input"
        />
    </div>

    <div class="grid">
        <EvidenciaCard
            v-for ="(item, index) in evidenciasFiltradas"
            :key="index"
            :evidencia="item"
            @ver-detalhes="verDetalhes(item)"
        />
    </div>

<Modal v-if="modalAberto" @fechar="modalAberto=false">
    <h2>{{ evidenciaSelecionada.titulo }}</h2>
    <p>{{ evidenciaSelecionada.descricao }}</p>
    </Modal>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import EvidenciaCard from '.. /componentes/EvidenciaCard.vue';
import Modal from '../componentes/Modal.vue';

const filtro = ref('');
const modalAberto = ref(false);
const evidenciaSelecionada = ref({ } )

const evidencias = ref([
    { titulo: 'Cena do Crime', descricao: 'Local encontrado com pistas importantes.' },
    { titulo: 'Arma do Crime', descricao: 'Objeto encontrado no local do crime.' },
    { titulo: 'Fotos do Crime', descricao: 'Registros fotográficos do local do crime.' },
]);

const evidenciasFiltradas = computed(() => {
    return evidencias.value.filter(evidencia =>
        evidencia.titulo.toLowerCase().includes(filtro.value.toLowerCase())
    );
});

function abrirModal(item) {
    evidenciaSelecionada.value = item;
    modalAberto.value = true;

}
</script>