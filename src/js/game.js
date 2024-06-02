import { Engine, DisplayMode } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { LevelOne } from './levelOne.js';
import { Instruct } from './instructionScene.js';
import { Intro } from './introScene.js';
import { End } from './endScene.js'

export class Game extends Engine {

    constructor() {
        super({
            displayMode: DisplayMode.FillScreen,
            antialiasing: false,
            pixelArt: true

        });
        this.start(ResourceLoader).then(() => this.showIntro());
    }

    showIntro() {
        const intro = new Intro(this);
        this.addScene('begin', intro)
        this.goToScene('begin')
    }

    showInstruct() {
        const instruct = new Instruct(this);
        this.addScene('cntrl', instruct)
        this.goToScene('cntrl')
    }

    showLevelOne() {
        const levelOne = new LevelOne(this);
        this.addScene('main', levelOne)
        this.goToScene('main')
    }

    showEnd() {
        const ending = new End(this);
        this.addScene('end', ending)
        this.goToScene('end')
    }
}

new Game();
