const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply(`Bu komutu kullanabilmek için **Emojileri Yönet** iznine sahip olmalısın!`);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kullanıcıyı Bulamadım.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir Rol gir");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu isime sahip herhangi bir rol bulamadım.\nLütfen Rol Adını Tam Girermisin <a:olmsz:616760750458798080> ");

  if(rMember.roles.has(gRole.id)) return message.reply("Kullanıcı zaten o role sahip <a:olmsz:616760750458798080> ");
  await(rMember.addRole(gRole.id));

    message.channel.send(`Merhaba! <@${rMember.id}>, Yeni bir rol aldı!\nVerilen Rol:   ${gRole.name}    `)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rolver',
  description: 'ADD ROLE TO PPL',
  usage: 'RoleAdded'
};