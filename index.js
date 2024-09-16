const Discord = require('discord.js'); //Declaramos Discord

const client = new Discord.Client(); //Declaramos client

client.once('ready', () => {

	console.log('Listo!');}); //Esto es un evento, pasará cuando el bot se inicie (Su nombre lo dice: Cliente en "Listo")

client.on('message', message => { //Este es el evento de message, cuando alguien escriba algo se ejecutará lo de adentro

	
if (message.content === '!ping') { //si el contenido de el mensaje es !ping se ejecutará lo que esta dentro de los {}
message.channel.send("pong!") //Hacemos que envie "pong!" al canal donde se ejecutó
}
if (message.content === '!hello') { //si el contenido de el mensaje es !ping se ejecutará lo que esta dentro de los {}
message.channel.send("Hello World!") //Hacemos que envie "Hello world!" al canal donde se ejecutó
}
});//Cerramos el evento
client.login('aqui-va-tu-token'); //Aqui va tu token, necesario para que el bot se inicie
