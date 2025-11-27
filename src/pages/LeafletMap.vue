<script setup>
import { ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';

let zoom = ref(19);
let coords = ref({
    lat: 59.42691,
    lng: 24.74348,
})
</script>

<template>
    <div>
        <input v-model="zoom" type="range" min="1" max="19" step="1">
        {{ zoom }}
        <button class="button is-primary" @click="coords={lat: 59.41711, lng: 24.79923}">Go to airport</button>
        <button class="button is-primary" @click="coords={lat: 59.40930, lng: 24.69764}">Go to home</button>
    </div>
    <Leaflet :lat="coords.lat" :lng="coords.lng" :zoom="zoom"></Leaflet>
    <Leaflet :lat="24.74348" :lng="59.42691" :zoom="4"></Leaflet>
</template>

<style></style>