const Discord = require('discord.js'); //Declaramos Discord
const client = new Discord.Client(); //Declaramos client
const { prefix } = require('./config.json'); //Traemos a prefix de el archivo config.json

client.once('ready', () => {

	console.log('Listo!');}); //Esto es un evento, pasará cuando el bot se inicie (Su nombre lo dice: Cliente en "Listo")

client.on('message', message => { //Este es el evento de message, cuando alguien escriba algo se ejecutará lo de adentro

if (!message.content.startsWith(prefix) || message.author.bot) return; //Le ponemos dos condiciones, SI el contenido de el mensaje de el usuario empieza con prefix Y el usuario no es bot, ejecutará lo que sigue

	const args = message.content.slice(prefix.length).trim().split(/ +/); //Esto va a separar los argumentos
	const command = args.shift().toLowerCase(); //Esto tomará los comandos por más que estén en mayuscula

	if (command === 'ping') { //si el contenido de el mensaje es ping se ejecutará lo que esta dentro de los {}
		message.channel.send('Pong.'); //Hacemos que envie "pong!" al canal donde se ejecutó
  } // Cerramos el if
});//Cerramos el evento
client.login('aqui-va-tu-token'); //Aqui va tu token, necesario para que el bot se inicie
