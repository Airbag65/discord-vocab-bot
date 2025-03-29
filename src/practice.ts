import { ActionRowBuilder, ChatInputCommandInteraction, Client, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";


const practice = (client: Client, event: ChatInputCommandInteraction) => {
    console.log(event.channel.name)
    if (event.channel.name !== 'øve-ord') {
        event.reply('Gå til kanalen øve ord for at øve dig!');
        return;
    }
    event.reply('Velkommen!')
    const modal = new ModalBuilder()
        .setCustomId('TranslateThis')
        .setTitle('Skriv dette ord på dansk')
    const answerInput = new TextInputBuilder()
        .setCustomId('TextInput')
        .setLabel('kött')
        .setStyle(TextInputStyle.Short)
    const ar = new ActionRowBuilder().addComponents(answerInput)
    modal.addComponents(ar)
    event.showModal(modal)

}


export default practice
