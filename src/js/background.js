import { Actor, } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';

export class BackGround extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.BackGround.toSprite())
    }
}

export class IntroFrame extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.Intro.toSprite())
    }
}

export class InstrcutFrame extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.Instruction.toSprite())
    }
}

export class EndFrame extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.End.toSprite())
    }
}