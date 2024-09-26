const Discord = require('discord.js'); //Declaramos Discord
const client = new Discord.Client(); //Declaramos client

client.once('ready', () => {
	console.log('Listo!');}); //Esto es un evento, pasará cuando el bot se inicie (Su nombre lo dice: Cliente en "Listo")
client.login('aqui-va-tu-token'); //Aqui va tu token, necesario para que el bot se inicie
