const Discord = require ('discord.js');
const client = new Discord.Client ();
const { Client, Attachment } = require('discord.js');


client.on('ready', () => {
  console.log('I am ready!');
});

if (message.content === ':ban')  {
  let bUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban Management")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser.user.tag} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel.name)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if (!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban({
    reason: bReason
  });
  message.delete();
  incidentchannel.send({
    embed: banEmbed
  });

  return;
}

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
