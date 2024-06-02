import { Resource, Engine, Scene, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { BackGround, EndFrame } from "./background"

export class End extends Scene {
    constructor(game) {
        super({
            displayMode: DisplayMode.FillScreen
        })
        this.game = game
    }

    onInitialize(engine) {
        const background = new BackGround();
        background.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(background)

        const end = new EndFrame
        instruct.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(end)
    }
}