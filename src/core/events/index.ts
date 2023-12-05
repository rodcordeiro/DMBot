import { Events } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { client } from '../discord/client.discord';

(async () => {
  const eventsHandlers = fs
    .readdirSync(path.resolve(__dirname))
    .filter((command) => command.includes('.event'));

  await Promise.allSettled(
    eventsHandlers.map(async (handler) => {
      await import(`./${handler}`);
    }),
  );
  client.once(Events.ClientReady, (instance) => {
    console.log(`Instance Ready! Bot ${instance.user.tag} initialized.`);
  });
})();
