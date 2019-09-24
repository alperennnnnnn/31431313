const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://rec-nd.cf/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discord.gg/yRPt74p')
      .setDescription('REC-ND Botunu Güncel Olarak `.yardım` Modülü Üzerinden Takip Edebilirsiniz.')
      .setThumbnail(message.author.avatarURL)
        .setThumbnail('https://media.discordapp.net/attachments/611520936948006946/611845499426701312/recnd_qr.png')
        .addField('Botumuzun Özellikleri(konusu), Müzik,Oyun,Eğlence,Grafik,Moderasyondur.', 'REC-ND Prefix `.`')
        .addField('REC-ND | Botu Davet Etmek İçin ','http://rec-nd.ml/', true)
        .setImage('https://cdn.discordapp.com/attachments/595734712614649886/608476196963090434/REC-ND-Gif.gif')
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

module.exports.help = {
  name: 'davet',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};