import { Events } from 'discord.js';

import { client } from '../discord/client.discord';

client.on(Events.MessageCreate, async (message) => {
  if (message.guildId || message.interaction?.commandName) return;
  // console.log("private_message::create", message);
});
client.on(Events.MessageUpdate, async (message) => {
  if (message.guildId || message.interaction?.commandName) return;
  // console.log("private_message::update", message);
});
