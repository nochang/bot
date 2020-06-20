const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzIzMDk4NTg1ODk3NTAwNjky.XuzG2g.Puzgr-WAThr6oHxEzpTvCzoYvP0;';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);