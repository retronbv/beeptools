# ⚡️ beeptools 
### Tools to make developing your bot easier ✨
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