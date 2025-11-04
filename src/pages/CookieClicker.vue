<script setup>
import { ref } from 'vue';
import BuildingButton from '../components/BuildinButton.vue';

let cookies = ref(0);
let cps = ref(0)
let imgsource = ref('https://i.postimg.cc/G3Ff9xxz/cookie.png');

setInterval(() => {
    cookies.value += cps.value;
}, 1000);

let buildings = ref([
    {name: 'Cursor', icon: '👆🏻', cps: 0.1, price: 15, count: 0},
    {name: 'Grandma',icon: '👵🏻', cps: 1, price: 100, count: 0},
]);

function buyBuilding(building) {
    if(cookies.value >= building.price) {
        cookies.value -= building.price;
        cps.value += building.cps;
        building.count++;
    }
}


</script>
<template>
    <div class="columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ parseFloat(cookies.toFixed(1)) }} cookies broken!</h1>
            <h3>per second {{ parseFloat(cps.toFixed(1)) }}</h3>
            <div @click="cookies++">
                <img style="height: 400px"
                    :src="imgsource"
                    @mousedown="imgsource = 'https://i.postimg.cc/3J3cG0LJ/cookie-broken.png'"
                    @mouseup="imgsource = 'https://i.postimg.cc/G3Ff9xxz/cookie.png'"
                    @mouseleave="imgsource = 'https://i.postimg.cc/G3Ff9xxz/cookie.png'"
                >
            </div>
        </div>
        <div class="column has-background-warning">
            test
        </div>
        <div class="column has-background-info">
             <BuildingButton v-for="building in buildings" :building="building" :disabled="cookies<building.price" @click="buyBuilding(building)"></BuildingButton>
        </div>
    </div>
</template>

<style>
    .is-disabled{
        cursor: not-allowed !important;
        opacity: 50%;
    }
</style>