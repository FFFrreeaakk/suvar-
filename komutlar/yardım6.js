const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***Birlik Hakkı Yardım Paneli***__`,)
 .addField(`Birinci Birlik Hakkı  Rol Verme`,`.1brlkhkk @kişi`)
 .addField(`İkinci Birlik Hakkı  Rol Verme`,`.2brlkhkk @kişi `)
 .addField(`Üçüncü Birlik Hakkı Rol Verme`,`.3brlkhkk @kişi `)
 .addField(`Birlik Hakkı Doldu Rol Verme`,`.brlkhkkdoldu @kişi `)
 .addField(`JASYS Kayıt`,`.jasys @kişi `)
 .addField(`Sivile Atma`,`.sivil @etiket`)
 .addField(`İsim Değiştirme`,`.nick @etiket İsim `)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardımbirlikhakkı","helpbirlikhakkı","ybirlikhakkı"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardımbirlikhakkı',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardımbirlikhakkı'
};