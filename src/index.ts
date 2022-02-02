import { Client, Intents, Message } from "discord.js";

const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (msg: Message) => {
  console.log({ msg });
  msg.react("✌️");
});

client.on("messageCreate", (msg: any) => {
  console.log("msg");
});
client.login(process.env.TOKEN);
