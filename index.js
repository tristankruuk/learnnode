function hello() {
    console.log('Hello world!');
}

hello();
hello();

function helloName(name) {
    console.log(`Hello ${name}!`);
}

helloName('Kaspar');
helloName('Martin');
helloName('Manivald');

function hi(name='Nameless', age='Infinite') {
    console.log(`Hi ${name} you are ${age} years old`);
}
hi('Kaspar', 32);
hi('Martin', 69);
hi('Manivald', 1000);
hi();

let sum = function (a, b) {
    return a+b;
}

let answer = sum(4, 5);
console.log(answer);
console.log(sum(6, 10));
sum(5, 6);

let sub = (a, b) => {
    return a-b;
}

console.log(sub(6, 10));

let mult = (a, b) => a*b;

console.log(mult(6, 10));

let root = a => a*a;

console.log(root(6));

let cool = () => console.log('cool');

cool();

let awesome = {
    party: function () {
        console.log('PARTY!');
    },
    cool: () => console.log('cool'),
    nice() {
        console.log('nice');
    }
};

awesome.party();
awesome.cool();
awesome.nice();