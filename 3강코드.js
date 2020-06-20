const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzIzMDk4NTg1ODk3NTAwNjky.XuzG2g.Puzgr-WAThr6oHxEzpTvCzoYvP0';
const welcomeChannelName = "채팅방";
const byeChannelName = "채팅방";
const welcomeChannelComment = "rE.Requiem 오신걸 환영합니다.";
const byeChannelComment = "안안녕....안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);