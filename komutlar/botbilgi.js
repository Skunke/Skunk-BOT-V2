const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
//const loglar = require('../loglar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription("Skunk İstatistik")
  .addField(` Bot Sahipleri:`, `<@431772260508893194> ve <@481412397895122963>`, true)
  .addField(' Shard:', '1/1', true)
	.addField(" Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(" Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField(" Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField(" Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(" Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(` Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField(" Ping:", `${client.ping}`, true)
  .addField(" Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(` Premium:`, "Aktif xD", true)
  .addField(`Davet Et`, `[Tıkla](https://discordapp.com/oauth2/authorize?client_id=709131040714784788&scope=bot&permissions=2146958847)`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
