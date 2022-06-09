const Discord = require("discord.js");
const db = require('quick.db');
const jkood = require('../jkood.js');
const zaman = require("useful-tools")

exports.run = async (client, message, args) => {
  
  const kayıtkanalı = await jkood.Kayıtkanal
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`Kayıt İşlemlerini Sadece Ayarlanmış Kayıt Kanalından Yapabilirsiniz. (<#${kayıtkanalı}>)`);
  if(!message.member.roles.cache.has(jkood.KayitYetkilisi)) { return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  } else {
  const erkekrol = await jkood.SancaktarDayı
  if(!erkekrol) return message.reply(`Sancaktar Dayı Rolü Ayarlanmamış!`)
    
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.reply("Lütfen Bir Kullanıcı Girin.")
    if(member.id === message.author.id) return message.reply('Kendini Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    if(member.id === client.user.id) return message.reply('Botu Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    if(member.id === message.guild.OwnerID) return message.reply('Sunucu Sahibini Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    const user = message.guild.member(member)
    if (user.roles.cache.has(jkood.SancaktarDayı)) return message.reply("Bu Kişi Zaten Kayıtlı!")
    const nick = args[1];
    const rutbe = args[2];
    setTimeout(function(){user.roles.add(jkood.SancaktarDayı)},3000)
    setTimeout(function(){user.roles.remove(jkood.kayıtsızrol)},4000)
    
    if(jkood.erkekdiger){
    jkood.erkekdiger.map(async Freak => {
    await user.roles.add(Freak)
  })
}
    
    if(jkood.erkekalinacakdiger){
    jkood.erkekalinacakdiger.map(async Freak => {
    await user.roles.remove(Freak)
  })
}
  
    let sayı = 1
  let data = db.get("jkood."+message.guild.id+user.user.id)
  let isimler 
  if(data){
   isimler = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı++}. \`${jkoodcommunity.name}\`**`).slice(0, jkood.Eskiİsimler).join("\n")
  } else {
       isimler = "`Eski İsim Kaydı Bulunamadı!`"
  }
    
    let sayı2 = 1
  let data2 = db.get("jkood."+message.guild.id+user.user.id)
  let katarih 
  if(data2){
   katarih = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı2++}. \`${jkoodcommunity.tarih}\`**`).slice(0, jkood.KayitTarihi).join("\n")
  } else {
       katarih = "`Kayıt Tarihi Bulunamadı!`"
  }
    
    let sayı3 = 1
  let data3 = db.get("jkood."+message.guild.id+user.user.id)
  let kayetkili
  if(data3){
   kayetkili = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı3++}. \`<@${jkoodcommunity.kaydeden}>\`**`).slice(0, jkood.kayitedenler).join("\n")
  } else {
       kayetkili = "`Kayıt Edenler Bulunamadı!`"
  }
    
  db.push("jkood."+message.guild.id+user.user.id,{
    id: user.user.id,
    tarih: `${zaman.tarih(Date.now())}`,
    cinsiyet: "Dayı",
    kaydeden: message.author.id
  })
    
      const embed = new Discord.MessageEmbed()
    .setAuthor("Dayı Üye Kaydı Yapıldı!")
    .addField(`Kayıt Edilen\n`, `${user}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setFooter("Freak")
    .setColor("RED")
    .setThumbnail(member.avatarURL({dynamic:true}))  
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.Kayıtkanal).send(embed)

   db.add(`erkekistatistik${message.author.id}.${message.guild.id}`, 1) 
   db.add(`toplamistatistik${message.author.id}.${message.guild.id}`, 1)
   
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dayı"],
  permLevel: 0
};
exports.help = {
  name: "dayı",
  description: "",
  usage: "dayı @etiket"
};
   