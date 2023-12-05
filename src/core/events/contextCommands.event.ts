import { ChatInputCommandInteraction, Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isContextMenuCommand()) return;

  const command = client.commands?.get(interaction.commandName);
  if (!command || !command.execute) {
    interaction.reply('Command not found or has no execution routine!');
    return;
  }
  try {
    await command.execute(
      interaction as unknown as ChatInputCommandInteraction,
    );
  } catch (error) {
    console.error(`Error executing ${interaction.commandName}`);
    console.error(error);
  }
});
