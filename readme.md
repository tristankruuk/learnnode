**-------------------------------------------------------------------------------------**

**VUE**
*Ülesehitus:*

*<script template>JavaScript</script>*
*<template>HTML</template>*

-> Põhimõtteliselt HTML ja JavaScript samas failis, kus saab HTML'i lisada {{ muutuja }} kujul JavaScripti.
-> Vue failide vahel saab suhelda JS'iga > import x from y
-> Vue's saab siduda lihtsamaid JS funktsioone HTML elementidega. onClick > @click
-> Selle abil saab luua funktsionaalseid elemente koos atribuutidega, mida saab kasutada läbi projekti.

**-------------------------------------------------------------------------------------**

**Vue-router**
*Page history:*

*createWebHashHistory*
-> Jääb samale pageile refreshides
-> Kasutab hashtagi id'na, mis on lehe sisene asukoht (phm naq respawn point)
-> Loeb ainult osa, mis on peale #
    - Saab kasutada ka sama lehe peal (nt kui on erinevad peatükid)
-> Suvaline id ei muuda mitte midagi, browser isegi ei ürita kuhugi minna

*createWebHistory*
-> Failipõhine - otsib vastava path'i nimelist faili

*historyApiFallback*
-> Kui eelmine ei leia faili, siis ta vaatab uuesti üle index.js'i

*createMemoryHistory*
-> Vahemälusse salvestab info. Peale refreshi ei salvestu.



*Vue router vs tavalised lingid*

*<RouterLink to="./"></RouterLink>*
<a href="./"></a>

-> a lingid töötavad samamoodi, kuid faile muutes või liigutades tuleb käsitsi muuta path'e ning HashHistory ja MemoryHistory'ga need ei tööta
    - Seepärast on RouterLink parem valik
-> Üldiselt on need samad, kuid a href asemel on RouterLink to

**-------------------------------------------------------------------------------------**

**JavaScript Node**

**JavaScript Browser**

**Loops (JavaScript)**

**If & Switch (JavaScript)**

**Boolean (JavaScript)**

**Function (JavaScript)**

**Object (JavaScript)**

**Array (JavaScript)**

**Strings (JavaScript)**

**Math (JavaScript)**

**Data Types (JavaScript)**

**Muutujad (JavaScript)**
