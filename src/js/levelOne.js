import { Engine, Loader, TestClock, DisplayMode, StrategyContainer, Scene, Camera, Label, Font, Color, Vector } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { GameTimer } from './timer.js';
import { BackGround } from './background.js';
import { Player } from './player.js';
import { Stone } from './stone.js'
import { Plate } from './plate.js';
import { Door } from './door.js';
import { DoorBox } from './doorBox.js';


export class LevelOne extends Scene {

    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        console.log("Initializing game");
        this.startGame()
        Resources.FirstLevel.addToScene(this)
    }

    startGame() {
        const background = new BackGround();
        this.add(background)

        const timer = new GameTimer();
        this.add(timer)

        const player = new Player();
        this.add(player);
        this.game.player = player

        const door = new Door();
        this.add(door);

        const doorBox = new DoorBox(this);
        this.add(doorBox)

        const plate = new Plate(door);
        this.add(plate);


        const bobSt = new Stone();
        this.add(bobSt);
        bobSt.pos = new Vector(848, 176);

        const jenSt = new Stone();
        this.add(jenSt);
        jenSt.pos = new Vector(896, 112);

        // const test = new Stone();
        // this.add(test);
        // test.pos = new Vector(432, 144);

        this.camera.strategy.lockToActor(player);
        this.camera.zoom = 2.4;
    }
}