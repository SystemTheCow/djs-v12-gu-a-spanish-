const fs = require('fs'); //Usaremos el modulo fs
const Discord = require('discord.js'); //Declaramos Discord
const client = new Discord.Client(); //Declaramos client
const { prefix } = require('./config.json'); //Traemos a prefix de el archivo config.json

client.commands = new Discord.Collection(); //Creamos una colección de discord

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js')); // Usamos fs para filtrar los archivos de la carpeta /comandos que terminen con .js

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`); // Esto hace que lea todos los comandos
	client.commands.set(command.name, command);
}

client.once('ready', () => {

	console.log('Listo!');}); //Esto es un evento, pasará cuando el bot se inicie (Su nombre lo dice: Cliente en "Listo")

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; //Si la persona no es un bot ni el mensaje comienza con el prefix no funcionará

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase(); //Algunas opciones para los comandos

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client, Discord); //La funcion para crear el handler, exportamos client y Discord para no tener que definirlos despues
	} catch (error) {
		console.error(error);
		message.reply('Ocurrió un error al ejecutar este comando'); //Un mensaje de error por si hay algún error de sintaxis
	}
});

client.login('aqui-va-tu-token'); //Aqui va tu token, necesario para que el bot se inicie.
