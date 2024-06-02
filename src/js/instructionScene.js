import { Resource, Engine, Scene, DisplayMode, Vector, Keys } from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { BackGround, InstrcutFrame } from "./background"

export class Instruct extends Scene {
    constructor(game) {
        super({
            displayMode: DisplayMode.FillScreen
        })
        this.game = game
    }

    onInitialize(engine) {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                console.log('pressed space ');
                this.game.showLevelOne();
            }
        });

        const background = new BackGround();
        background.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(background)

        const instruct = new InstrcutFrame
        instruct.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.add(instruct)
    }
}

