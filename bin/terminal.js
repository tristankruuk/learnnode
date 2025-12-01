function write(text) {
    process.stdout.write(text)
}

import chalk from "chalk"; // Värvide jaoks kasulik



// Töötab ka seadistamata
write(chalk.green.bgYellow.underline('Mingi tekst'))
write(chalk.bgAnsi256(67)('Tekst')) // Rohkem värve
write(chalk.bgRgb(67, 67, 67)('Tekst')) // Rohkem värve
write('\n')