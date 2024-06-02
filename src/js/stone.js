import { Actor, Vector, Keys, CollisionType, range } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Door } from "./door.js";
import { Plate } from "./plate.js";

export class Stone extends Actor {
    constructor() {
        super({
            width: 32,
            height: 32,
            collisionType: CollisionType.Active,
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Stone.toSprite())
        this.on('collisionstart', (event) => this.stoneOnPlate(event))
        this.z = 2
    }

    stoneOnPlate(event) {
        console.log(event.other);
        if (event.other instanceof Plate) {
            console.log('hit the plate!')
            event.other.activatePlate();
        } else {
            console.log('plate')
        }
    }
}