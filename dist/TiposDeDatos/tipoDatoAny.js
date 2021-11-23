"use strict";
//any
/*
cuando no esta disponible toda la informacion o el hecho de declarar un tipo especifico para cierta informacion pueda tomarnos mucho tiempo
podemos asignarle diferentes valores dependiendo de nuestras necesidades, recibe cualquier tipo, evita el chequeo de datos

permite llamar a metodos que no tiene y no avisa el error
no es recomendable usar , solo para migrar proyectos
*/
const str = getValue('myString');
let looselyTyped = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();
