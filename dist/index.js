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
const dotenv_1 = __importDefault(require("dotenv"));
const constant_1 = require("./constant");
const index_1 = require("./utils/index");
dotenv_1.default.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
client.once("ready", () => {
    console.log("Ready");
});
client.login(process.env.DISCORD_BOT_TOKEN);
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let args = message.content.split(" ");
    switch (args[0]) {
        case constant_1.PREFIX:
            if (!args[1]) {
                message.channel.send("Stanowski, gdzie jest jakaś komenda?");
                return;
            }
            if (args[1] === constant_1.COMMANDS.COMMANDS) {
                index_1.printCommands(message);
                return;
            }
            if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
                message.channel.send("Ale ludzie, tu nikogo nie ma!");
                return;
            }
            if (args[1] === constant_1.COMMANDS.WHAT) {
                index_1.playSomething("co.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.COKE) {
                index_1.playSomething("colka.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.LAUGH) {
                index_1.playSomething("haha.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.STANOWSKI) {
                index_1.playSomething("stanowski.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.RUN) {
                index_1.playSomething("rozbieg.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.FUCK_OFF) {
                index_1.playSomething("nara.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.PEOPLE) {
                index_1.playSomething("ludzie.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.WELCOME) {
                index_1.playSomething("witam.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.RAGE) {
                index_1.playSomething("rage.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.TFU) {
                index_1.playSomething("tfu.mp3", message);
                return;
            }
            if (args[1] === constant_1.COMMANDS.COME_HERE) {
                index_1.playSomething("chodztu.mp3", message);
                return;
            }
            message.channel.send("Co ty pierdolisz, nie ma takiej komendy!");
            break;
        case constant_1.LEAVE:
            (_c = (_b = message.member) === null || _b === void 0 ? void 0 : _b.voice.channel) === null || _c === void 0 ? void 0 : _c.leave();
            break;
    }
}));
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find((ch) => ch.name === "member-log");
    if (!channel)
        return;
    channel;
    channel.send(`Siema ${member}, widziałeś Stanowskiego?`);
});
//# sourceMappingURL=index.js.map