const Discord = require('discord.js');

const client = new Discord.Client();

const { Client, Attachment } = require('discord.js');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});
 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {

    if (message.content === 'Sergio Ramos') {

       message.reply('http://i37.tinypic.com/ok0pqd.jpg');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
