"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCommands = exports.playSomething = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const constant_1 = require("../constant");
exports.playSomething = (song, message) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield message.member.voice.channel.join();
    const dispatcher = connection.play(fs_1.default.createReadStream(path_1.join(__dirname, `../../src/sound/${song}`)));
    dispatcher.on("start", () => {
        console.log(`${song} is now playing!`);
    });
    dispatcher.on("finish", () => {
        console.log(`${song} finished playing!`);
    });
    dispatcher.on("error", console.error);
});
exports.printCommands = (message) => __awaiter(void 0, void 0, void 0, function* () {
    let text = "Słuchaj no mnie człowieku, tu masz wszystkie komendy: \n!wyjazd \n";
    yield constant_1.arrayCommands.forEach((command) => {
        text = `${text}${constant_1.PREFIX} ${command}\n`;
    });
    yield message.channel.send(text);
});
//# sourceMappingURL=index.js.map