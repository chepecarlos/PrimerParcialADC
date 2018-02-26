
process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_319"] = 1;
const Bot = require('node-telegram-bot-api');
const request = require('request');

const url = 'https://launchlibrary.net/1.3/launch';
const trigger = '/mequieres';
const trigger1 = 'Te quiero';
const trigger2 = 'No te quiero';
const token = '547644896:AAHvXTQRmzXgGiEZjAM_m44YqrwmbumCqpA';
const bot = new Bot(token, {polling: true});

const prepareData = (body) => {
 const launches = JSON.parse(body).launches;
 return launches.filter((launch) => launch !== undefined)
  .map((launch) => `${launch.name} on ${launch.net}`)
  .join('\n\n');
};

bot.on('message', (msg) => {
 if (msg.text.toString() === trigger) {


bot.sendMessage(msg.chat.id, 'Elige una opcion:', {
  reply_markup: {
    keyboard: [[trigger1], [trigger2]]
   }
  }

 )  };
});
