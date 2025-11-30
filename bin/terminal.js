function write(text) {
    process.stdout.write(text)
}

write('Hello terminal\n'); // Uus rida
write('Hello terminal\t'); // Tab ehk pikem tühik
write('\x1B[34m'); // Värvi lisamine eraldi käsklusega
write('Hello terminal\n'); // Värvi lisamine



// Kõik värvid on ise seadistatavad setting'utest
// Foreground colors
write('\x1B[30m'); // Must
write('Hello terminal\n');
write('\x1B[31m'); // Punane
write('Hello terminal\n');
write('\x1B[32m'); // Roheline
write('Hello terminal\n');
write('\x1B[33m'); // Kollane
write('Hello terminal\n');
write('\x1B[34m'); // Sinine
write('Hello terminal\n');
write('\x1B[35m'); // Lilla
write('Hello terminal\n');
write('\x1B[36m'); // Helesinine
write('Hello terminal\n');
write('\x1B[37m'); // Valge
write('Hello terminal\n');

// See muudab värvi alates rea jooksmisest kõigele terminalis
// See on siis, kui on default terminal (pole Starship)
// Background colors
write('\x1B[40m'); // Must highlight
write('Hello terminal\n');
write('\x1B[41m'); // Punane highlight
write('Hello terminal\n');
write('\x1B[42m'); // Roheline highlight
write('Hello terminal\n');
write('\x1B[43m'); // Kollane highlight
write('Hello terminal\n');
write('\x1B[44m'); // Sinine highlight
write('Hello terminal\n');
write('\x1B[45m'); // Lilla highlight
write('Hello terminal\n');
write('\x1B[46m'); // Helesinine highlight
write('Hello terminal\n');
write('\x1B[47m'); // Valge highlight
write('Hello terminal\n');



// Default värvid
write('\x1B[0m'); // Peaks ka töötama
write('\x1B[39m');
write('\x1B[49m');
write('\n'); // Tühi rida lõppu



// Dim/bright text color
write('\x1B[90m');
write('Hello terminal\n');
write('\x1B[91m');
write('Hello terminal\n');
write('\x1B[92m');
write('Hello terminal\n');
write('\x1B[93m');
write('Hello terminal\n');
write('\x1B[94m');
write('Hello terminal\n');
write('\x1B[95m');
write('Hello terminal\n');
write('\x1B[96m');
write('Hello terminal\n');
write('\x1B[97m');
write('Hello terminal\n');

// Dim/bright background/highlight color
// Siin ürtiab teha \n uue rea tagi värviliseks
// Need rikuvad ka starshipi väljanägemise
write('\x1B[100m');
write('Hello terminal');
write('\x1B[101m');
write('Hello terminal');
write('\x1B[102m');
write('Hello terminal');
write('\x1B[103m');
write('Hello terminal');
write('\x1B[104m');
write('Hello terminal');
write('\x1B[105m');
write('Hello terminal');
write('\x1B[106m');
write('Hello terminal');
write('\x1B[107m');
write('Hello terminal');



// Loob kõikide võimalike erinevate värvidega #
// Samad värvid korduvad pidevalt, Node ei saa sellest aru
// Windows settingutes saab muuta seadeid, et neid näha oleks
for(let i = 0; i<256; i++) {
    write(`\x1B[38;5;${i}m`);
    write('#')
}

// Taustavärviga paremini näha
for(let i = 0; i<256; i++) {
    write(`\x1B[48;5;${i}m`);
    write(' ')
}



// Truecolor (css RGB väärtus)
write('\n')
write(`\x1B[48;2;255;0;0m`); // Peaks olema punane, roosa
write('Hello colors')



// Väga sujuv - väga palju hexa värve (256)
// Kõiki värve jääkski ootama
// Neid ei saa kasutaja muuta, aga neid pole näha, kui pole seadistatud
for(let i = 0; i<256; i++) {
    write(`\x1B[48;5;${i};${i};${i}m`);
    write(' ')
}



// See peab olema kõige lõpus (ka)
write('\x1B[0m'); // Peaks ka töötama
write('\x1B[39m');
write('\x1B[49m');
write('\n'); // Tühi rida lõppu