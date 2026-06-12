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