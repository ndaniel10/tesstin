const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', (message) =>{
    if(message.content.startsWith(':a')) {
        message.channel.send('Shut up you`re gay')
    
        message.delete(message)
    } 
 
client.on('message', (message) =>{
    if(message.content.startsWith(':f')) {
        message.channel.send('If I met you in real life I would give you a concussion')
    
        message.delete(message)
    } 
    
});

client.on('message', (message) => {
    if(message.content.startsWith (':rank')) {
      message.reply('https://cdn.discordapp.com/attachments/489843725007192074/517043007690899485/unknown.png');
    }
  });
  
client.on('message', (message) =>{
    if (message.content === 'Sergio Ramos')  {
       message.reply('http://i37.tinypic.com/ok0pqd.jpg');
    }
});
  
client.on('message', (message) =>{
    if(message.content.startsWith(':help')) {
      message.reply('**To start the simulation you must state with the appropriate spacing or else it wont work properly. ** ```:AndresSim <emoji> <ClubName> <emoji> <ClubName> <Competition Name> <Stadium Name> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100>``` For an example type :example');
    }
});

client.on('message', (message) =>{
    if(message.content.startsWith(':example')) {
         message.reply('https://cdn.discordapp.com/attachments/489843725007192074/514894613157511168/unknown.png')
    }

    
});
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
