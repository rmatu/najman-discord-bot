import { join } from "path";
import fs from "fs";

export const playSomething = async (song: string, message: any) => {
  const connection = await message.member.voice.channel.join();

  // Create a dispatcher
  const dispatcher = connection.play(
    fs.createReadStream(join(__dirname, `../../src/sound/${song}`))
  );

  dispatcher.on("start", () => {
    console.log(`${song}.mp3 is now playing!`);
  });

  dispatcher.on("finish", () => {
    console.log(`${song}.mp3 finished playing!`);
    message.member?.voice.channel?.leave();
  });

  // Always remember to handle errors appropriately!
  dispatcher.on("error", console.error);
};
