<script setup>
import L from 'leaflet'; // #1 Error > L not defined
import 'leaflet/dist/leaflet.css'; // #3 Error > Map not rendering correctly
import 'leaflet/dist/images/marker-icon-2x.png'; // #4 Error > Marker not showing
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue'; // #2 Error > map container not found
let {lat, lng, zoom} = defineProps(['lat', 'lng', 'zoom'])

let id = 'map-' + useId();
let map = null;
onMounted(() => {
    map = L.map(id).setView([lat, lng], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let marker = L.marker([59.42691, 24.74348]).addTo(map);
});

watch(() => zoom, (zoom, oldZoom) => {
    console.log(zoom, oldZoom)
    map.setZoom(zoom)
});

watch(() => lat, lat => {
    map.panTo([lat, lng]);
});

watch(() => lng, lng => {
    map.panTo([lat, lng]);
});
</script>

<template>
    <div :id="id"></div>
</template>

<style scoped>
div{
    height: 45vh;
}
</style>