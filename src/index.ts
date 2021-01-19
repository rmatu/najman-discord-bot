import dotenv from "dotenv";
import { PREFIX, COMMANDS, LEAVE } from "./constant";
import { playSomething, printCommands } from "./utils/index";

dotenv.config();

import { Client } from "discord.js";
const client = new Client();

client.once("ready", () => {
  console.log("Ready");
});

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async (message) => {
  let args = message.content.split(" ");
  switch (args[0]) {
    case PREFIX:
      if (!args[1]) {
        message.channel.send("Stanowski, gdzie jest jakaś komenda?");
        return;
      }

      if (args[1] === COMMANDS.COMMANDS) {
        printCommands(message);
        return;
      }

      if (!message.member?.voice.channel) {
        message.channel.send("Ale ludzie, tu nikogo nie ma!");
        return;
      }

      if (args[1] === COMMANDS.WHAT) {
        playSomething("co.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.COKE) {
        playSomething("colka.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.LAUGH) {
        playSomething("haha.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.STANOWSKI) {
        playSomething("stanowski.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.RUN) {
        playSomething("rozbieg.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.FUCK_OFF) {
        playSomething("nara.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.PEOPLE) {
        playSomething("ludzie.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.WELCOME) {
        playSomething("witam.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.RAGE) {
        playSomething("rage.mp3", message);
        return;
      }

      if (args[1] === COMMANDS.TFU) {
        playSomething("tfu.mp3", message);
        return;
      }

      message.channel.send("Co ty pierdolisz, nie ma takiej komendy!");

      break;
    case LEAVE:
      message.member?.voice.channel?.leave();
      break;
  }
});

client.on("guildMemberAdd", (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  channel;
  // Send the message, mentioning the member
  // @ts-ignore
  channel.send(`Siema ${member}, widziałeś Stanowskiego?`);
});
