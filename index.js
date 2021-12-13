const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
const fs = require('fs');
const colors = require("@retronbv/colors")
const express = require('express')
module.exports = {
    register_slash: async (token, gid, cid, cpath) => {
        const commands = [];
        const commandFiles = fs.readdirSync('./' + cpath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./${cpath}/${file}`);
            commands.push(command.meta.toJSON());
        }

        const rest = new REST({
            version: '9'
        }).setToken(token);

        try {
            console.log(colors.blue + '[BEEPTOOLS]' + colors.reset + ' Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationGuildCommands(cid, gid), {
                    body: commands
                },
            );

            console.log(colors.blue + '[BEEPTOOLS]' + colors.reset + 'Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    },
    keep_alive: () => {
        const app = express()
        app.get('/', (req, res) => {
            res.send('Hello from beeptools!')
        })
        app.listen(3000, () => {
          console.log(`${colors.blue}[BEEPTOOLS]${colors.reset} "Keep alive" server started at: ${colors.green}http://localhost:3000${colors.reset}`)
        })
    }
}