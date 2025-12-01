import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.red('unicorn'),
    {
        padding: 1
    }
))

console.log(boxen('unicorn',
    {
        padding: 1,
        margin: 1,
        borderStyle: 'doubleSingle'
    }
))

console.log(boxen('unicrons love rainbows',
    {
        title: 'magical',
        titleAlignment: 'center',
        padding: 1
    }
))