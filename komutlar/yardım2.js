const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***İlk Önce JGK Kayıt***__`,`.jgk @kişi Birim . isim Boşluksuz Rütbe [ Er ] Yapınız Sonradan`)
 .addField(`JÖAK Kayıt`,`.jöak @kişi`)
 .addField(`JKOMD Kayıt`,`.jkomd @kişi `)
 .addField(`JTRFK Kayıt`,`.jtrfk @kişi `)
 .addField(`JHDB Kayıt`,`.jhdb @kişi `)
 .addField(`JASYS Kayıt`,`.jasys @kişi `)
 .addField(`Sivile Atma`,`.sivil @etiket`)
 .addField(`İsim Değiştirme`,`.nick @etiket İsim `)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımjgk","helpjgk","yjgk"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardımjgk',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardımjgk'
};