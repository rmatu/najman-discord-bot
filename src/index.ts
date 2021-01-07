import dotenv from "dotenv";
import { PREFIX, COMMANDS } from "./constant";
import { playSomething } from "./utils/index";

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
        console.log("here");
        message.channel.send("Stanowski, gdzie jest link?");
        return;
      }

      if (!message.member?.voice.channel) {
        message.channel.send("Ale ludzie, tu nikogo nie ma!");
        return;
      }

      if (args[1] === COMMANDS.WHAT) {
        playSomething("co-ty-pierdolisz.mp3", message);
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
