"use strict";
//UNION DE DATOS
let price = 12.45;
let price2 = 12.45;
price2 = '10.50k';
if (typeof price2 === 'string') {
    price2 = parseInt(price2);
}
console.log(price2);
function printID(id) {
    console.log(id);
}
printID(232434);
printID('2323');
//-----------------------------------
//INTERSECCION DE DATOS
// & , ambos conjuntos de datos obligatorio
let persona = {
    nombre: 'Marcos',
    edad: 28,
    id: 'qe343',
    trabaja: true
};
// |, cumple uno de los conjunto de datos
let persona2 = {
    nombre: 'Marcos',
    edad: 28
};
function getBudget(obj) {
    if (typeof obj.budget === 'string') {
        if (isNaN(parseInt(obj.budget))) {
            throw new Error("El valor ingresado no es un numero");
        }
        else {
            console.log(`$${obj.budget} USD`);
        }
    }
    else {
        console.log(`$${obj.budget} USD`);
    }
}
getBudget({
    budget: '5000'
});
function countPeople(people) {
    if (Array.isArray(people)) {
        return people.length;
    }
    else {
        return 1;
    }
}
console.log(countPeople('Marcos'));
console.log(countPeople(['Anna', 'Lucas', 'Jorge']));
