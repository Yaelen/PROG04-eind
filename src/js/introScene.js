import { Resource, Scene, DisplayMode, Keys, Input, Vector, Engine } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { BackGround, IntroFrame, } from "./background"

export class Intro extends Scene {
    constructor(game) {
        super({
            displayMode: DisplayMode.FillScreen
        })
        this.game = game
    }

    onInitialize(engine) {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                console.log('pressed space')
                this.game.showInstruct();
            }
        });
        const background = new BackGround();
        background.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(background)

        const introFrame = new IntroFrame
        introFrame.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(introFrame)
    }
}

