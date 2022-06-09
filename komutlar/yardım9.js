const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***İlk Önce EGM Kayıt***__`,`.egm @kişi Birim . isim Boşluksuz Rütbe [ Memur ] Yapınız Sonradan`)
 .addField(`PÖH Kayıt`,`.pöh @kişi`)
 .addField(`TEM Kayıt`,`.tem @kişi `)
 .addField(`NARKO Kayıt`,`.narko @kişi `)
 .addField(`ASAYİŞ Kayıt`,`.asys @kişi `)
 .addField(`TRAFİK Kayıt`,`.trfk @kişi `)
 .addField(`Sivile Atma`,`.sivil @etiket`)
 .addField(`İsim Değiştirme`,`.nick @etiket İsim `)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımegm","helpegm","yegm"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardımegm',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardımegm'
};
