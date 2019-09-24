const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://rec-nd.glitch.me/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128', 'https://discord.gg/yRPt74p')
      .setThumbnail(message.author.avatarURL)
        .addField('Kick sistemi kullanımı','Kick sistemi Kurulumu', true)
        .addField('.kicklimit 3','Belirlediğiniz rakamdan daha fazla kick atamazlar. \n[3 rakamını istediğiniz rakama çevirebilirsiniz]', true)
        .addField('.kickci @role','Kickci @rol \n[Belirlediğiniz rolde kick atma yetkisi olur \nO rolde olanlar max belirlediğiniz rakamda kick atabilirler.]', true)
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banned3sa'],
  permLevel: 0
};

module.exports.help = {
  name: 'kicksistemi',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};