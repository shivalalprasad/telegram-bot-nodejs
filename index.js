const TgBot = require('node-telegram-bot-api');

const axios = require('axios');

const dotenv = require('dotenv');

dotenv.config();

const bot = new TgBot(process.env.BOT_API_KEY,{polling:true})

bot.onText(/\/start/,(option)=>{

  console.log("user Authiticated");

  bot.sendMessage(option.chat.id,"Hello this bot is created by @work_msp \n for any Queries contact admin @work_msp")
})

bot.onText(/\/joke/,async (option)=>{

  const joke = await
                  axios.get('http://www.official-joke-api.appspot.com/random_joke');

  const type = await joke.data.type;

  const setup = await joke.data.setup;

  const punchline = await joke.data.punchline;

  bot.sendMessage(option.chat.id, setup + " , " + punchline)

})
