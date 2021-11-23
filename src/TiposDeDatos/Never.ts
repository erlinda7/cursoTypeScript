// never

/*
tipos de datos que nunca van ocurrir, como una Excepcion que nunca va devolver porque va tirar un error
tambien en un ciclo infinitp
*/

function error(message:string):never {
    throw new Error(message);
    
}

function infinite():never {
    while(true);
}