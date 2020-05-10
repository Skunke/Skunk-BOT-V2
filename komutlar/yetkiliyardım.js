const Discord = require('discord.js');
//const loglar = require('../loglar.json');

//var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** .ban @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** .kick = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** .unban @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** .rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** .temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** .ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** .yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** .ailemiz = Botun Sunucularını Gösterir.\n**•** .sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=709131040714784788&scope=bot&permissions=2146958847)`)
      .setFooter('Skunk Yetkili')

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
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};
