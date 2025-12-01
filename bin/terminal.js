function write(text) {
    process.stdout.write(text)
}

import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your name?', name => {
    console.log(`Hello ${name}!`);
    rl.close();
})