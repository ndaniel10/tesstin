const Discord = require ('discord.js');
const client = new Discord.Client ();
const { Client, Attachment } = require('discord.js');



client.on('ready', () => {
  console.log('I am ready!');
});

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  if (message.content.startsWith(':kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
       
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
         
          message.reply('I was unable to kick the member');
          console.error(err);
          
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }

    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});






//general and messages

client.on('message', (message) =>{
    if(message.content === ':a') {
        message.channel.send('Shut up you`re a gay faggot')
    
        message.delete(message)
    } 
    
});

client.on('message', (message) =>{
    if(message.content === ':b') {
        message.channel.send('wa')
    
        message.delete(message)
    } 
    
});

client.on('message', (message) => {
    if(message.content === ':rank') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/489843725007192074/517043007690899485/unknown.png');
        message.channel.send(attachment);
    }
});

  
  client.on('message', (message) =>{
    if (message.content === 'Sergio Ramos')  {
        const attachment = new Attachment('http://i37.tinypic.com/ok0pqd.jpg');
        message.channel.send(attachment);
    }
});
  
client.on('message', (message) =>{
    if(message.content.startsWith(':help')) {
      message.reply('**To start the simulation you must state with the appropriate spacing or else it wont work properly. ** ```:AndresSim <emoji> <ClubName> <emoji> <ClubName> <Competition Name> <Stadium Name> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100>``` For an example type :example');
    }
});

client.on('message', (message) =>{
    if(message.content.startsWith(':example')) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/489843725007192074/514894613157511168/unknown.png');
        message.channel.send(attachment);
    }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome👋');
  if (!channel) return;
  channel.send(`Go to ▶verification◀ for the next step ${member}`);
});

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
