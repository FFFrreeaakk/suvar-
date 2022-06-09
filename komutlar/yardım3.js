const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`Süvari Gaming`)
 .addField(`__***Birlik Alım Yardım***__`,)
 .addField(`TSK Yardım`,`.yardımtsk , ytsk , helptsk`)
 .addField(`JGK Yardım`,`.yardımjgk , yjgk , helpjgk `)
 .addField(`EGM Yardım`,`.yardımegm , yegm , helpegm `)
 .addField(`Sancaktar Yardım`,`.yardımsnc , ysnc , helpsnc`)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","y"],
  permLevel: 0
};
module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};