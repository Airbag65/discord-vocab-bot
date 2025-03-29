import { REST, Routes, Client, Events, GatewayIntentBits } from "discord.js";
import practice from "./practice";

const commands = [
    {
        name: 'practice',
        description: 'Makes you do vocab',
    },
];
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN || "");

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.APP_ID || ""), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}




client.once(Events.ClientReady, async (readyClient) => {
    console.log(`${readyClient.user.tag} connected to server`)
})

client.on(Events.MessageCreate, (message) => {
    if (message.author.id === process.env.APP_ID) { return }
    // message.reply(message.content)
    console.log(message.content)
})

client.on(Events.InteractionCreate, (event) => {
    if (!event.isChatInputCommand()) { return }
    if (event.commandName === 'practice') {
        practice(client, event)
    }
})

client.login(process.env.BOT_TOKEN)
