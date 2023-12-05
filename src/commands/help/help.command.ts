import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
} from 'discord.js';

import { client } from '../../core/discord/client.discord';

export default class HelpCommand {
  data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows bot help!');
  async execute(interaction: ChatInputCommandInteraction) {
    const commandData = client.commands?.map((c) => {
      return {
        name: c.data.name,
        value: '\u200B',
        // value: c.data.description || '\u200B',
      };
    });
    const embed = new EmbedBuilder()
      .setTitle('Command list:')
      .setDescription(
        '_Commands without description could be context commands. Tried my best to maintain self-describing_',
      )
      .setFields(commandData || [])
      .setAuthor({
        name: 'Dweller vault manager',
      })
      .setThumbnail(
        'https://freepngimg.com/save/140471-pip-boy-images-fallout-download-free-image/1600x2350',
      );
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
}
