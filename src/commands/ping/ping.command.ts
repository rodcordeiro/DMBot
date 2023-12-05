import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default class PingCommand {
  data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply({ content: 'Pong!', ephemeral: true });
  }
}
