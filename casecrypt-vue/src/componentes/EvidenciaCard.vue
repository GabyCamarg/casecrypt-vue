<template>
    <div class="card">
        <h3>{{ evidencia.titulo }}</h3>
        <button @click=" $emit ('ver-detalhes')">
            Ver Detalhes
        </button>
    </div>  
</template>

<script setup>
defineProps(['evidencia']
);
</script>