//unknown
//cuando no sabemos al principio que tipo de dato va ser

let notSure:unknown = 4;
notSure = 'Ahora soy un string';
notSure= true;

declare const maybe:unknown;

if(maybe === true) {
    const aBoolean:boolean = maybe;
}

if(typeof maybe === 'string') {
    const aString:string= maybe;
}