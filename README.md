# ⚡️ beeptools 
### Tools to make developing your bot easier!

![npm badge](https://shields.io/static/v1?style=for-the-badge&logo=npm&label=beeptools&message=on%20npm&color=critical) ![gh badge](https://shields.io/static/v1?style=for-the-badge&logo=github&label=beeptools&message=on%20github&color=critical) ![GitHub stars](https://img.shields.io/github/stars/retronbv/beeptools.svg?style=for-the-badge&label=Stars&maxAge=2592000&logo=github&color=critical)

**(requires NodeJS 16 or higher!)**

Just simply import into your code! 
```js
const beeptools = require("beeptools")
beeptools.RegisterSlash(process.env.TOKEN, guildId, clientId, "path/to/slash/commands/dir");
// Now my slash commands are up to date :D
```

**What you can do (so far 😏):**
 - Easily update slash commands as you develop
 - Create slash commands easily
 - Create a "keep alive" webserver

#### Here is how your slash command file should look:
```js
const { Builders } = require('beeptools');

// I can easily make a slash command with the slash command builder!

module.exports = Builders.SlashCommandBuilder.Builder(Builders.SlashCommandBuilder.MetaBuilder("ping", "Simple ping command!"), (interaction)=>{
  await interaction.reply({content:"Ping!"})
})
```