"use strict";
//arreglos
//formas de definir un array
const items = [1, 2, 3, 4, 5, 6, 7];
const nombres = ['Marcos', 'Juan', 'Lety'];
const edades = [18, 34, 36];
edades.push(4);
edades.push(45, 23.4);
const res = nombres.filter(x => x.startsWith('ju'));
//tupla
//diferentes tipos de datos en un arreglo
const tupla = ['Marcos', 28];
const tupla2 = ['Marcos', 28, false, 45];
//const tupla3:[string | number] = ['Marcos', 28]; //me dio error
const arrTuplas = [
    [10, false],
    [34, true],
    [50, false],
];
//tambien me dio error
/* const arrTuplas2:[number | boolean][] = [
    [10, false],
    [34, true],
    [50, false],
] */ 
