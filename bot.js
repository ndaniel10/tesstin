const Discord = require ('discord.js');
const bot = new Discord.Client ();
const { Client, Attachment } = require('discord.js');
//messages


bot.on('message', (message) =>{
    if(message.content.startsWith(':a')) {
        message.channel.send('Shut up you`re gay')
    
        message.delete(message)
    } 
    
});

bot.on('message', (message) =>{
    if(message.content.startsWith(':f')) {
        message.channel.send('If I met you in real life I would give you a concussion')
    
        message.delete(message)
    } 
    
});

bot.on('message', (message) => {
    if(message.content.startsWith (':rank')) {
      message.reply('https://cdn.discordapp.com/attachments/489843725007192074/517043007690899485/unknown.png');
    }
  });
  
  bot.on('message', (message) =>{
    if (message.content === 'Sergio Ramos')  {
        const attachment = new Attachment('http://i37.tinypic.com/ok0pqd.jpg');
        message.channel.send(attachment);
    }
});
  
bot.on('message', (message) =>{
    if(message.content.startsWith(':help')) {
      message.reply('**To start the simulation you must state with the appropriate spacing or else it wont work properly. ** ```:AndresSim <emoji> <ClubName> <emoji> <ClubName> <Competition Name> <Stadium Name> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100>``` For an example type :example');
    }
});

bot.on('message', (message) =>{
    if(message.content.startsWith(':example')) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/489843725007192074/514894613157511168/unknown.png');
        message.channel.send(attachment);
    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
