const Discord = require('discord.js');
//const loglar = require('../loglar.json');

//var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** .tr = Ne Mutlu Türküm Diyene.\n**•** .aşk @kullanıcı = Kullanıcı İle Aranızdaki Seviyeyi Gösterir.\n**•** .korkut = sunucudan birini Korkutursunuz.\n**•** .1vs1 @kullanıcı = Kullanıcı İle Eğlenceli 1VS1 atarsınız.\n**•** .balıktut = Balık Tutarsınız.\n**•** .espri = Espri Yaparsınız (Çok Soğuktur Dikkat).\n**•** .söv = Bot İstediğiniz Kişiye Söver.\n**•** .slot = Slot Oyunu Oynar.\n**•** .rastgeleuye = Rast Gele en az 2 üye seçer.\n**•** .havadurumu = Seçtiğiniz Şehirin Hava Durumunu Gösterir. \n')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=709131040714784788&scope=bot&permissions=2146958847)` + "**\n**"+`[Designed by Skunk]()`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/6MP58c6)`, false)
      .setFooter('Skunk Eğlence')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};
