// objetos

const user = {
    nombre: 'Marcos',
    edad:28
};


console.log(user, user.nombre, user['nombre']);


function printCoords(punto:{x:number, y:number}) {
    console.log(`coordenadas: ${punto.x} - ${punto.y}`);
    
}

const p = {
    x:10,
    y:20
}
printCoords(p);

printCoords({x:40, y:50});


function postTweet(tweet: {userName:string, text:string, mediaUrl?:string }) {
    console.log(`nuevo tweet: ${tweet.userName}, ${tweet.text}, ${tweet.mediaUrl?.toLocaleLowerCase() ?? ''}`);
    
}

//sino tenemos un valor como la mediaUrl , ponemos ? en la funcion y con eso al llamar a la funcion no nos dara error
postTweet({userName: 'Valdimir', text: 'hola a todos'});


const tweet:{userName:string, text:string, mediaUrl:string, fecha?:boolean} = {
    userName: 'typescript',
    text: 'Hola a todos desde Typescript',
    mediaUrl: 'http://hola.com'
}
postTweet(tweet);