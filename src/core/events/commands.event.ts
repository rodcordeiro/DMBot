import { Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands?.get(interaction.commandName);
  if (!command || !command.execute) {
    interaction.reply('Command not found or has no execution routine!');
    return;
  }

  try {
    if (process.env.NODE_ENV === 'production' && command.maintenance) {
      await command.maintenanceActions(interaction);
      return;
    }
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing ${interaction.commandName}`);
    console.error(error);
  }
});
