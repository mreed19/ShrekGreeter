const Discord = require ('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN).catch(err => {
  console.error(`ERROR: Unable to login bot: ${err}`);
  process.exit(1);
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on('voiceStateUpdate', async (oldMember, newMember) => {
  const newUserChannel = newMember.channel;
  const oldUserChannel = oldMember.channel;

  if (newUserChannel && oldUserChannel !== newUserChannel) {
    try {
      const connection = await newMember.channel.join();
      const dispatcher = connection.play('ShrekMessage.wav');

      dispatcher.on('finish', () => {
        connection.disconnect();
        dispatcher.destroy()
      });
      dispatcher.on('error', (err) => {
        connection.disconnect();
        dispatcher.destroy();
        throw new Error(err);
      });
    } catch (err) {
      console.log(`ERROR: Something went wrong trying to play message: ${err}`);
    }
  }
});
