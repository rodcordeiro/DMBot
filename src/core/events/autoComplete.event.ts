import { Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isAutocomplete()) return;

  const command = client.commands?.get(interaction.commandName);
  if (!command || !command.autocomplete) {
    await interaction.respond([]);
  }
  try {
    await command?.autocomplete!(interaction);
  } catch (error) {
    console.error(error);
  }
});
