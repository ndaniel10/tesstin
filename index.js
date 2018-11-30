const botconfig = require("./botconfig.json");
const Discord = require ('discord.js');
const client = new Discord.Client ();
const { Client, Attachment } = require('discord.js');
//messages

client.on('ready', () => {
  console.log('I am ready!');
});

//moderations
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }


  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }




  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
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
