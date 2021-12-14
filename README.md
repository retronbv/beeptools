# ⚡️ beeptools 
### Tools to make developing your bot easier!

![npm badge](https://shields.io/static/v1?style=for-the-badge&logo=npm&label=beeptools&message=on%20npm&color=critical) ![gh badge](https://shields.io/static/v1?style=for-the-badge&logo=github&label=beeptools&message=on%20github&color=critical) ![GitHub stars](https://img.shields.io/github/stars/retronbv/beeptools.svg?style=for-the-badge&label=Stars&maxAge=2592000&logo=github&color=critical)

**(requires NodeJS 16 or higher!)**

Just simply import into your code! 
```js
const beeptools = require("beeptools")
beeptools.register_slash(process.env.TOKEN, guildId, clientId, "path/to/slash/commands/dir");
// Now my slash commands are up to date :D
```

**What you can do (so far 😏):**
 - Easily update slash commands as you develop
 - Create a "keep alive" webserver

#### Here is how your slash command file should look:
```js
const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Simple ping command!')
module.exports = {
  meta:data,
  run: (async (inter)=>{
    await inter.reply({ content: 'Pong!'})
  })
}
```