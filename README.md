# Najman Discord Bot

- [Lista komend](#lista-komend)
- [Jak dodać bota na swój server discord?](#jak-dodać-bota-na-swój-server-discord?)

## Lista komend

| Komenda           | Akcja                                 |
| ----------------- | ------------------------------------- |
| !najman komendy   | Bot wyświetla listę dostępnych komend |
| !najman wyjazd    | Bot opuszcza kanał                    |
| !najman co        | Bot odtwarza co.mp3                   |
| !najman colka     | Bot odtwarza colka.mp3                |
| !najman haha      | Bot odtwarza haha.mp3                 |
| !najman stanowski | Bot odtwarza stanowski.mp3            |
| !najman rozbieg   | Bot odtwarza rozbieg.mp3              |
| !najman nara      | Bot odtwarza nara.mp3                 |
| !najman ludzie    | Bot odtwarza ludzie.mp3               |
| !najman witam     | Bot odwarza witam.mp3                 |

## Jak dodać bota na swój server discord?

- Zainstaluj wszystkie paczki

```bash
  yarn
```

- W celu zdobycia swojego tokena, wejdz na stronę https://discord.com/developers/applications, kliknij w przycisk "New Application", Token znajdziesz w zakładce "Bot"

- Stwórz plik .env w folderze src oraz dodaj swój token

```.env
DISCORD_BOT_TOKEN=$TWÓJ_TOKEN
```

- Przejdź do zakładki "General Information" i skopiuj swój CLIENT ID

- Dodaj bota na swój serwer wchodząc w ten link discord.com/api/oauth2/authorize?client_id=$TWÓJ_CLIENT_ID&scope=bot

- Teraz możesz uruchomić bota

```
yarn start
```
