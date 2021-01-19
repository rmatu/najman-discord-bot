import { join } from "path";
import fs from "fs";
import { arrayCommands, PREFIX } from "../constant";
import * as googleTTS from "google-tts-api";

export const playSomething = async (song: string, message: any) => {
  const connection = await message.member.voice.channel.join();

  const dispatcher = connection.play(
    fs.createReadStream(join(__dirname, `../../src/sound/${song}`))
  );

  dispatcher.on("start", () => {
    console.log(`${song} is now playing!`);
  });

  dispatcher.on("finish", () => {
    console.log(`${song} finished playing!`);
  });

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

export const say = async (message: any) => {
  googleTTS
    .getAudioBase64("Hello world", {
      lang: "en-US",
      slow: false,
      host: "https://translate.google.com",
      timeout: 10000,
    })
    .then(console.log)
    // [
    //   { shortText: '...', base64: '...' },
    //   { shortText: '...', base64: '...' },
    //   ...
    // ];
    .catch(console.error);
};
