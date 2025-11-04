<script setup>
import { ref } from 'vue';

let cookies = ref(0);
let imgsource = ref('https://i.postimg.cc/G3Ff9xxz/cookie.png');

</script>
<template>
    <div class="columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ cookies }} cookies broken</h1>
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
            test
        </div>
    </div>
</template>