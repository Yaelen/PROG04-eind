import { Actor, CollisionType, Vector } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Stone } from "./stone.js";
import { Door } from "./door.js";

export class Plate extends Actor {
    constructor(door) {
        super({
            pos: new Vector(464, 144),
            width: 32,
            height: 32,
            collisionType: CollisionType.Passive,
        });

        this.door = door
        console.log("Plate created");
        this.hasBeenActivated = false;
    }

    onInitialize() {
        this.graphics.use(Resources.Plate.toSprite())
        this.z = 1
    }

    activatePlate() {
        if (!this.hasBeenActivated) {
            console.log('Plate activated!');
            if (this.door) {
                this.door.openDoor();
            } else {
                console.error('Door reference or openDoor method is missing or incorrect');
            }
            this.hasBeenActivated = true;
        } else {
            console.log('Plate has already been activated.');
        }
    }

}