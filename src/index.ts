import 'reflect-metadata';
import { ActivityType } from 'discord.js';

import { config } from './common/config';
import { client } from './core/discord/client.discord';
import { Character } from './common/helpers/character.helpers';
import './commands';
import './core/events';
// import { AppDataSource } from './database';
const char = new Character();
console.log(char);

// AppDataSource.initialize().then(() =>
client.login(config.app.TOKEN).then(() => {
  setInterval(
    () => {
      const timer = setTimeout(
        () => {
          client.user?.setActivity('with some goblins...');
          clearTimeout(timer);
        },
        2 * (60 * 1000),
      );
      client.user?.setPresence({
        status: 'online',
        activities: [
          {
            name: '/help',
            type: ActivityType.Listening,
          },
        ],
      });
    },
    10 * (60 * 1000),
  );
});
// );
