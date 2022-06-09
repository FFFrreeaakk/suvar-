const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***İlk Önce SANCAKTAR Kayıt***__`,`.snc @kişi Birim . isim Boşluksuz Rütbe [ Koruma ] Şeklinde Yapınız Sonradan`)
 .addField(`Sancaktar Baba Kayıt`,`.baba @kişi`)
 .addField(`Sancaktar Dayı Kayıt`,`.dayı @kişi `)
 .addField(`Sancaktar Yakı.K Kayıt`,`.yakınk @kişi `)
 .addField(`Sancaktar Baş Koruma Kayıt`,`.başk @kişi `)
 .addField(`Sancaktar Koruma Kayıt`,`.koruma @kişi `)
 .addField(`Sancaktar Güvenlik Kayıt`,`.güvenlik @kişi `)
 .addField(`Sivile Atma`,`.sivil @etiket`)
 .addField(`İsim Değiştirme`,`.nick @etiket İsim `)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımsnc","helpsnc","ysnc"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardımegm',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardımsnc'
};