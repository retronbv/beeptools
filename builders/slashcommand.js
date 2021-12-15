const { SlashCommandBuilder } = require('@discordjs/builders');
function metaBuilder(name, desc) {
  return new SlashCommandBuilder().setName(name).setDescription(desc)
}
function actualBuilder(meta, cb) {
  return {
    meta: meta,
    run: (inter) => {
      cb(inter)
    }
  }
}

module.exports = {
  MetaBuilder: metaBuilder,
  Builder: actualBuilder
}