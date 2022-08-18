import dotenv from 'dotenv'
dotenv.config()
import DiscordJS, { Intents, Message } from 'discord.js'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('O Bot está atualmente online!')
})

client.on('messageCreate', (Message) => {
    if(Message.content === 'oi') {
        Message.reply({
            content: 'Olá',
        })
    }
})

client.login(process.env.token)