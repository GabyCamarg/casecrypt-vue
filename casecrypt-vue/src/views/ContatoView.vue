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