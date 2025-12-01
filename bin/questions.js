import inquirer from "inquirer";
import chalk from "chalk";

let anwsers = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "number",
    name: "number",
    message: "What is your phone number?",
  },
  {
    type: "rawlist",
    name: "burger",
    message: "Choose your burger",
    choices: [
      "Meaty Beast",
      "Cheeseburger",
      "Fat Bacon",
      "Egg Sandwitch",
      "Vegan",
    ],
  },
  {
    type: "checkbox",
    name: "toppings",
    message: "Do you have any allergies?",
    choices: [
      { name: "Cheese", checked: true },
      { name: "Patty", checked: true },
      { name: "Sauce", checked: true },
      { name: "Pickles", checked: true },
      { name: "Tomatoes", checked: true },
      { name: "Onions", checked: true },
      { name: "Lettuce", checked: true },
      { name: "Buns", checked: true },
    ],
  },
  {
    type: "confirm",
    name: "drink",
    message: "Do you want a drink?",
    default: true,
  },
  {
    // Millegi pärast ei tööta. Rawlistina töötas
    type: "list",
    name: "drinksize",
    message: "What size do you want?",
    choices: ["Small", "Medium", "Large", "Extra Large"],
    when: (answers) => answers.drink,
  },
  {
    type: "expand",
    name: "seasoning",
    message: "Choose a extra seasoning:",
    choices: [
      { key: "s", name: "Salt"},
      { key: "p", name: "Pepper"},
      { key: "c", name: "Chilli"},
    ],
  },
  {
    type: "password",
    name: "address",
    message: "Enter your address:",
    mask: "x",
  },
]);

console.log('\n')
console.log(`${anwsers.name}, your order has been confirmed! We'll call you at ${anwsers.number} when order is ready.`);
console.log(`We will make sure to add plenty of ${anwsers.seasoning} - be careful not to choke :)\n`);
console.log(chalk.red(`Please check if your order is correct!\n`));
console.log(`Burger:\t\t${anwsers.burger}`);
console.log(`Drink:\t\t${anwsers.drinksize} drink\n`);
console.log(`We will deliver it to you at ${anwsers.address}.\n`);