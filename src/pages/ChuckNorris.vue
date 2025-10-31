<script setup>
    fetch('https://api.chucknorris.io/jokes/random').then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    });
</script>

<template></template>