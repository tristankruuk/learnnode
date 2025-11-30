**WebSocket**

```
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
```

-> Uus muutumatu, mis loob serveri
-> Seadistus portile (seal asub web server)

```
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
```

  -> wss.on registreerib, kui klient 'connection' ühendab
  -> kui klient on ühendatud, siis jooksutab funktsiooni
  -> kui tuleb error, siis konsoolitakse viga

```
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
```

  -> kui "klient" saadab sõnumi, siis jooksutab funktsiooni
  -> funktsioon konsoolib sõnumi info (data)
  -> recieved: %s > sõnum topitakse %s koha peale

```
  ws.send('something');
});
```
#

*function buyCursor(){*
*    setInterval(() => {*

*    }, 1000)*
*}*

-> Peale intervali kasutamist tuleb kaks osa: funktsioon & intervali pikkus millisekundites
-> Kuna funktsiooni kasutades luuakse igakord uus interval, siis on mõistlik interval eraldi teha. Näiteks cps kaudu (clicks per second)

parseFloat(cookies.toFixed(1))

-> .toFixed muudab numbri kuju kindlaks (nt kuni kümnendmurdudeni)
-> parseFloat võtab komakohad ära, kui need on nulliväärsed

---

**VUE**
*Ülesehitus:*

*<script template>JavaScript</script>*
*<template>HTML</template>*
*<style>css</style>*

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
