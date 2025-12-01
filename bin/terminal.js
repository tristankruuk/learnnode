function write(text) {
    process.stdout.write(text)
}

import chalk from "chalk"; // Värvide jaoks kasulik



// Töötab ka seadistamata
write(chalk.green.bgYellow.underline('Mingi tekst'))
write(chalk.bgAnsi256(67)('Tekst')) // Rohkem värve
write(chalk.bgRgb(67, 67, 67)('Tekst')) // Rohkem värve


import inquirer from "inquirer";

let anwsers = await inquirer.prompt([
    {
        type: 'input', // Mis tüüpi
        name: 'name', // Mis võtme alla ta vastuse paneb (nt name)
        message: 'What is your name?' // message e tekst mida küsitakse
    },
    {
        type: 'number',
        name: 'age',
        message: 'What is your age?'
    }
]);



// answers muutujas sees on mitu väärtust (type, name, message)
// samamoodi nagu JSON'i väärtuste seest
console.log(`Hello ${anwsers.name}! You are ${anwsers.age} years old`)