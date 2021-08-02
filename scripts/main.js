const ui = require("ui-lib/library");

ui.addButton("mining-button", "pencil", () => {
    Vars.player.unit().mineTile = Vars.world.tile(Vars.player.x / 8, Vars.player.y / 8)})
