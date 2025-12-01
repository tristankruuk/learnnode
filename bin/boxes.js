import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.black('Kast 1 - kollane'),
    {
        borderStyle: 'single',
        backgroundColor: 'yellow',
        align: 'left',
        width: 100, height: 5,
        padding: 2, margin: 1,
    }
))

console.log(boxen(chalk.red.bgBlack('Kast 2 - punane'),
    {
        borderStyle: 'double',
        backgroundColor: 'red',
        align: 'center',
        width: 90, height: 4,
        padding: 1.5, margin: 1,
    }
))

console.log(boxen(chalk.ansi256(67)('Kast 3 - must'),
    {
        borderStyle: 'round',
        backgroundColor: 'black',
        align: 'right',
        width: 80, height: 3,
        padding: 1,  margin: 1,
    }
))

console.log(boxen(chalk.blueBright('Kast 4 - sinine'),
    {
        borderStyle: 'bold',
        backgroundColor: 'blue',
        title: chalk.black.bgWhite('Pealkiri 1 | vasak, bg: white'),
        titleAlignment: 'left',
        align: 'right',
        width: 70, height: 5.5,
        padding: 0.5,  margin: 1,
    }
))

console.log(boxen('Kast 5 - helepunane',
    {
        borderStyle: 'singleDouble',
        backgroundColor: 'redBright',
        title: 'Pealkiri 2 | center',
        titleAlignment: 'center',
        align: 'center',
        width: 60, height: 4.5,
        padding: 0,  margin: 1,
    }
))

console.log(boxen(chalk.blue('Kast 6 - helesinine'),
    {
        borderStyle: 'doubleSingle',
        backgroundColor: 'blueBright',
        title: chalk.yellow('Pealkiri 3 | right, yellow'),
        titleAlignment: 'right',
        align: 'left',
        width: 50, height: 3.5,
        margin: 1,
    }
))