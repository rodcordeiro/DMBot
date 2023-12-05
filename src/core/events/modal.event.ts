import { Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  try {
    const handler = client.modalHandlers?.find(
      (handler) => handler.modal === interaction.customId,
    );
    if (handler) {
      const command = client.commands?.get(handler?.command);
      if (command?.modalHandler) {
        await command?.modalHandler(interaction);
        return;
      }
    }
    await interaction.reply('Modal handler not implemented.');
  } catch (err) {
    console.error(err);
    await interaction.reply('Modal handler not implemented.');
  }
});
