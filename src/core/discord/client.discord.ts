import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import { BaseCommandType } from '../../common/commands/base.command';
import { ModalHandlerIdentifier } from '../../common/interfaces/modalHandler.interface';

export const client: {
  commands?: Collection<unknown, BaseCommandType>;
  modalHandlers?: ModalHandlerIdentifier[];
} & Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    8,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel, Partials.Message],
});
