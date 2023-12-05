/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Collection } from 'discord.js';
import fs from 'fs';
import { client } from '../core/discord/client.discord';
import { RegisterCommands } from './register';
import { BaseCommandType } from '../common/commands/base.command';
import { ModalHandlerIdentifier } from '../common/interfaces/modalHandler.interface';

(async () => {
  client.commands = new Collection();
  client.modalHandlers = [] as ModalHandlerIdentifier[];
  const commandsDir = fs
    .readdirSync('src/commands')
    .filter((command) => !command.endsWith('.ts') && !command.endsWith('.js'));

  const commands = await Promise.all(
    commandsDir.map(async (commandDir) => {
      try {
        const command: BaseCommandType = await import(
          `./${commandDir}/${commandDir}.command`
        ).then((module) => new module.default());
        return command;
      } catch (err) {
        console.log(`Failed to import ${commandDir}`);
        console.error(err);
      }
    }),
  ).then((commands) =>
    commands.filter((command) => {
      if (command) return command;
    }),
  );
  commands.map((command) => {
    console.debug(`[command] ${command?.data.name} imported`);
    client.commands?.set(command?.data.name, command!);
  });
  RegisterCommands();
})();
