import { join } from "path";
import fs from "fs";
import { arrayCommands, PREFIX } from "../constant";

export const playSomething = async (song: string, message: any) => {
  const connection = await message.member.voice.channel.join();

  // Create a dispatcher
  const dispatcher = connection.play(
    fs.createReadStream(join(__dirname, `../../src/sound/${song}`))
  );

  dispatcher.on("start", () => {
    console.log(`${song} is now playing!`);
  });

  dispatcher.on("finish", () => {
    console.log(`${song} finished playing!`);
  });

  // Always remember to handle errors appropriately!
  dispatcher.on("error", console.error);
};

export const printCommands = async (message: any) => {
  let text =
    "Słuchaj no mnie człowieku, tu masz wszystkie komendy: \n!wyjazd \n";
  await arrayCommands.forEach((command) => {
    text = `${text}${PREFIX} ${command}\n`;
  });
  await message.channel.send(text);
};
