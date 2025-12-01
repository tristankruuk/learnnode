# Terminal <br>

```
console.log('Hello terminal')
process.stdout.write('Hello terminal')
```
-> process käsklust on tüütu välja kirjutada, kuid see teeb teist asja ning võib olla vajalik <br>



```
function write(text) {
    process.stdout.write(text)
}

write('Hello terminal')
```
-> Saab luua funktsiooni, mis lihtsustab tulevikus välja kirjutamist <br>



```
\x1B[30m
```
-> Värve on 16 ja neid saab lisada selle koodiga <br>
-> 30-37 on teksti värvid <br>
-> 40-47 on teksti highlight'i värvid <br>
-> 39 % 49 on default värvid
**Lähemalt commit: Add terminal colors example**

---



# JSON.stringify & JSON.parse <br>

```
socket.send(JSON.stringify ({type: 'letter', value: letter.value}));
```
-> socket.send() funktsioon on websocketi sisse ehitatud (saadab serverisse data)  <br>
-> selle sisse jäib soovitud sõnum, mida ei saa anda JS muutujana (message.value). sel põhjusel tuleb kasutada JSON.stringify <br>
-> JSON.stringify muudab JS muutjad tekstiks, näiteks kui koodis on let letter = a, siis letter.value on a, mille muudab JSON.stringify tekstiks <br>



```
let data = JSON.parse(event.data);

  if(data.type === 'letter') {
    messages.value.push
  }
```
-> JSON.parse on vastupidine, mis muudab lihtteksti tagasi muutujaks <br>
-> Kasutades seda muutujas saab serverist muutjaid lugeda, nt data tüüpi <br>
-> Value on varem loodud muutuja pushitud JSON.stringify'ga serverisse <br>

---



# WebSocket <br>

```
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
```
-> Uus muutumatu, mis loob serveri <br>
-> Seadistus portile (seal asub web server) <br>



```
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
```
  -> wss.on registreerib, kui klient 'connection' ühendab <br>
  -> kui klient on ühendatud, siis jooksutab funktsiooni <br>
  -> kui tuleb error, siis konsoolitakse viga <br>



```
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
```
  -> kui "klient" saadab sõnumi, siis jooksutab funktsiooni <br>
  -> funktsioon konsoolib sõnumi info (data) <br>
  -> recieved: %s > sõnum topitakse %s koha peale <br>



```
  ws.send('something');
});
```
-> Saadab sõnumi serverisse <br>



```
&& client !== ws
```
-> && tähendab et mõlemad asjad peavad olema (if statementis) <br>
-> !== ei tohi võrduda (== peab võrduma) <br>
-> ws ehk minu local websocket klient <br>

---



# setInterval & komakohtade eemaldamine <br>
```
function buyCursor(){
    setInterval(() => {

    }, 1000)
}
```
-> Peale intervali kasutamist tuleb kaks osa: funktsioon & intervali pikkus millisekundites <br>
-> Kuna funktsiooni kasutades luuakse igakord uus interval, siis on mõistlik interval eraldi teha. Näiteks cps kaudu (clicks per second) <br>



```
parseFloat(cookies.toFixed(1))
```
-> .toFixed muudab numbri kuju kindlaks (nt kuni kümnendmurdudeni) <br>
-> parseFloat võtab komakohad ära, kui need on nulliväärsed <br>

---



# Vue <br>
*Ülesehitus:*

```
<script template>JavaScript</script>
<template>HTML</template>
<style>css</style>
```

-> Põhimõtteliselt HTML ja JavaScript samas failis, kus saab HTML'i lisada {{ muutuja }} kujul JavaScripti. <br>
-> Vue failide vahel saab suhelda JS'iga > import x from y <br>
-> Vue's saab siduda lihtsamaid JS funktsioone HTML elementidega. onClick > @click <br>
-> Selle abil saab luua funktsionaalseid elemente koos atribuutidega, mida saab kasutada läbi projekti. <br>

---



# Vue-router <br>
*Page history:*

```
createWebHashHistory
```
-> Jääb samale pageile refreshides <br>
-> Kasutab hashtagi id'na, mis on lehe sisene asukoht (phm naq respawn point) <br>
-> Loeb ainult osa, mis on peale # <br>
    - Saab kasutada ka sama lehe peal (nt kui on erinevad peatükid) <br>
-> Suvaline id ei muuda mitte midagi, browser isegi ei ürita kuhugi minna <br>

```
createWebHistory
```
-> Failipõhine - otsib vastava path'i nimelist faili <br>

```
historyApiFallback
```
-> Kui eelmine ei leia faili, siis ta vaatab uuesti üle index.js'i <br>

```
createMemoryHistory
```
-> Vahemälusse salvestab info. Peale refreshi ei salvestu. <br>


### Vue router vs tavalised lingid

```
<RouterLink to="./"></RouterLink>
<a href="./"></a>
```
-> a lingid töötavad samamoodi, kuid faile muutes või liigutades tuleb käsitsi muuta path'e ning HashHistory ja MemoryHistory'ga need ei tööta <br>
    - Seepärast on RouterLink parem valik <br>
-> Üldiselt on need samad, kuid a href asemel on RouterLink to <br>

---



# JavaScript <br>

**JavaScript Node** <br>
**JavaScript Browser** <br>
**Loops (JavaScript)** <br>
**If & Switch (JavaScript)** <br>
**Boolean (JavaScript)** <br>
**Function (JavaScript)** <br>
**Object (JavaScript)** <br>
**Array (JavaScript)** <br>
**Strings (JavaScript)** <br>
**Math (JavaScript)** <br>
**Data Types (JavaScript)** <br>
**Muutujad (JavaScript)** <br>

---



# Used packages <br>

### Axios
```
npm install axios
```
-> WebAPI jaoks <br>

### Bulma
```
npm install bulma
```
-> CSS raamistik <br>
-> CSS väärtused HTML klassinimedes <br>

### Chalk
```
npm install chalk
```
-> Terminal Node stiilide package <br>
-> Lihtsam viis lisada värve & stiile tekstile (underline jms) <br>

### Leaflet
```
npm install leaflet
```
-> Interaktiivsete kaartide jaoks JavaScriptis <br>

### Surge
```
npm install surge  
```
-> Staatiliste lehtede üles laadimiseks <br>
-> Ligipääs projektile läbi telefoni <br>

### Vue-Router
```
npm install vue-router
```
-> Vue.js routing package <br>
-> Dünaamiliste url jaoks (/home, /page) <br>

### Webpack
```
npm install webpack
```
-> Frontend bundler <br>
-> Ühendab koodi optimeeritud väljundiks <br>

### WebSocket
```
npm install ws
```
-> Serveri ehitamine <br>
-> Võimaldab luua chat, multiplayer jms otseühenduse <br>