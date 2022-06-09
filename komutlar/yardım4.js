const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***İlk Önce TSK Kayıt***__`,`.tsk @kişi Birim . isim Boşluksuz Rütbe [ Er ]  Yapınız Sonradan`)
 .addField(`DK Kayıt`,`.dk @kişi`)
 .addField(`KK Kayıt`,`.kk @kişi `)
 .addField(`ÖK Kayıt`,`.ök @kişi `)
 .addField(`HK Kayıt`,`.hk @kişi `)
 .addField(`Sivile Atma`,`.sivil @etiket`)
 .addField(`İsim Değiştirme`,`.nick @etiket İsim `)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımtsk","helptsk","ytsk"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardımtsk',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardımtsk'
};