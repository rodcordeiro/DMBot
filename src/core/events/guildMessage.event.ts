import { Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.MessageCreate, async (message) => {
  if (!message.guildId || message.interaction?.commandName) return;
});

client.on(Events.MessageUpdate, async (message) => {
  if (!message.guildId || message.interaction?.commandName) return;
  // console.log("guild_message::update", message);
});
