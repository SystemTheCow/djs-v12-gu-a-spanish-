module.exports = {
	name: 'say',
	description: 'Pon una linda descripcion',
	execute(message, args, client, Discord) {
		message.channel.send(args.join(" "))
	},
};