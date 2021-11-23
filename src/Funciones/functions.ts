//la extension Quakka es para los datos de los resultados en esta pantalla al escribir
// para activar   ctrl+p , >quokka.js: Focus Active Qoukka File
//para desactivar ctrl+p , >quokka.js: stop all

function saludar():void {
    console.log('Hola!!');
}

const saludo = () => {
    console.log('este es otro saludo');
}

saludar();
saludo();



function numero():number {
    return 5;
}
numero();



function cadena():string {
    return '5';
}
cadena();




const saludo2 = (nombre:string, edad: number):string => {
    const mensaje = `Hola! ${nombre}, veo que tienes ${edad}`;
    return mensaje.toUpperCase();
}

console.log(saludo2('Maria',28));
