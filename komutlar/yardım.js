const Discord = require('discord.js');
//const loglar = require('../loglar.json');

//var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Skunk`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=709131040714784788&scope=bot&permissions=2146958847) \n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Skunk - Yardım`, `:white_small_square: | **.eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **.yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **.kullanıcı**: Kullanıcılar için komutlar.\n`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
