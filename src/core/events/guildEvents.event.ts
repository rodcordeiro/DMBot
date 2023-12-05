import { Events } from 'discord.js';

// import { GuildServices } from '../../services/guild.service';
import { client } from '../discord/client.discord';

client.on(Events.GuildCreate, async (_guild) => {
  // await GuildServices.CreateOrUpdate({
  //   id: guild.id,
  // });
  // console.log("guild_guild::create", guild);
});

client.on(Events.GuildDelete, async (_guild) => {
  // await GuildServices.Delete({
  //   id: guild.id,
  // });
});
