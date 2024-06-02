import { Actor, CollisionType, Vector, Color } from "excalibur";
import { Player } from "./player.js";

export class DoorBox extends Actor {
    constructor(game) {
        super({
            pos: new Vector(288, 64),
            width: 32,
            height: 16,
            collisionType: CollisionType.PreventCollision,
        });
        this.game = game
        this.isOpen = false;
        this.z = 3
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive
        this.on('precollision', (event => this.hitDoor(event, this.game)));
    }

    hitDoor(event) {
        if (event.other instanceof Player) {
            console.log(this.game)
            this.game.showEnd();
        }
    }
}
