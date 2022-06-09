const Discord = require("discord.js");
const jkood = require('../jkood.js');

exports.run = async(client, message, args) => {
if(!message.member.hasPermission(jkood.KayitYetkilisi)) return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  
const kayıtsız = jkood.kayıtsızrol
let kişi = message.mentions.members.first()
if(!kişi) return message.reply('Lütfen bir kullanıcı girin.')

if(kişi.id === message.author.id) return message.reply('Kendini Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.')
if(kişi.id === client.user.id)return message.reply('Botu Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.')
if(kişi.id === message.guild.OwnerID) return message.reply('Sunucu Sahibini Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.');
  const user = message.guild.member(kişi)
  if (user.roles.cache.has(kayıtsız)) return message.reply("Bu Kişi Zaten Birlikte Değil!")
    setTimeout(function(){user.roles.remove(jkood.TRFK)},4000)
    setTimeout(function(){user.roles.remove(jkood.ASYS)},4000)
    setTimeout(function(){user.roles.remove(jkood.YNS)},4000)
    setTimeout(function(){user.roles.remove(jkood.TEM)},4000)
    setTimeout(function(){user.roles.remove(jkood.PÖH)},4000)
    setTimeout(function(){user.roles.remove(jkood.NARKO)},4000)
    setTimeout(function(){user.roles.remove(jkood.HDB)},4000)
    setTimeout(function(){user.roles.remove(jkood.EmniyetGenelMüdürlüğü)},4000)
    setTimeout(function(){user.roles.remove(jkood.JASYS)},4000)
    setTimeout(function(){user.roles.remove(jkood.JHDB)},4000)
    setTimeout(function(){user.roles.remove(jkood.JTRFK)},4000)
    setTimeout(function(){user.roles.remove(jkood.JKOMD)},4000)
    setTimeout(function(){user.roles.remove(jkood.JandarmaGenelKomutanlığı)},4000)
    setTimeout(function(){user.roles.remove(jkood.JKOMD)},4000)
    setTimeout(function(){user.roles.remove(jkood.KaraKuvvetleri)},4000)
    setTimeout(function(){user.roles.remove(jkood.HavaKuvvetleri)},4000)
    setTimeout(function(){user.roles.remove(jkood.DenizKuvvetleri)},4000)
    setTimeout(function(){user.roles.remove(jkood.ÖzelKuvvetler)},4000)
    setTimeout(function(){user.roles.remove(jkood.TürkSilahlıKuvvetleri)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarAilesi)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarBaba)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarDayı)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarYakınK)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarBaşK)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarKoruma)},4000)
    setTimeout(function(){user.roles.remove(jkood.SancaktarGüvenlik)},4000)
  
  user.setNickname("")
const embed = new Discord.MessageEmbed()
.setAuthor("Birlik Rollerini Aldım !")
.addField(`Birlik Rolleri Alınan`, `${kişi}`)
.addField(`İşlemi Uygulayan`,`${message.author}`)
.setColor('BLUE')
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.setThumbnail(message.mentions.users.first().avatarURL(({dynamic:true})))
.setTimestamp()
message.channel.send(embed)
  
kişi.roles.add(kayıtsız)       
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unregister'],
    permLevel: 0,
}
exports.help = {
  name: "sivil",
  description: "sivil",
  usage: "sivil @etiket"
};
   