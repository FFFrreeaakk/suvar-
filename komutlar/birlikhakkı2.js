const Discord = require("discord.js");
const db = require('quick.db');
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
  
  const kayıtkanalı = await jkood.Kayıtkanal
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`Kayıt İşlemlerini Sadece Ayarlanmış Kayıt Kanalından Yapabilirsiniz. (<#${kayıtkanalı}>)`);
  if(!message.member.roles.cache.has(jkood.KayitYetkilisi)) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  } else {
  const erkekrol = await jkood.İkinciBirlikHakkı
  if(!erkekrol) return message.reply(`Birlik Hakkı Rolü Ayarlanmamış!`)
    
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Lütfen Bir Kullanıcı Girin.")
     if(member.id === message.author.id) return message.reply('Kendini Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    if(member.id === client.user.id) return message.reply('Botu Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    const user = message.guild.member(member)
    setTimeout(function(){user.roles.add(jkood.İkinciBirlikHakkı)},3000)
    setTimeout(function(){user.roles.remove(jkood.BirinciBirlikHakkı)},4000)
    
      const embed = new Discord.MessageEmbed()
    .setAuthor("Üye Kaydı Yapıldı!")
    .addField(`Kayıt Edilen\n`, `${user}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setFooter("Freak")
    .setColor("BLUE")
    .setThumbnail(member.avatarURL({dynamic:true}))  
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.KayıtLog).send(embed)
   }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["2brlkhkk"],
  permLevel: 0
};
exports.help = {
  name: "2brlkhkk",
  description: "",
  usage: "2brlkhkk @etiket"
};
   