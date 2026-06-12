<template>
    <div class="overlay">
        <div class="modal">
            <slot />

            <button @click="$emit('fechar')">
                Fechar
            </button>
        </div>
    </div>
</template>