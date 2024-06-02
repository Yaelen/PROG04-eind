import { Actor, CollisionType, Vector, Animation, SpriteSheet, range, AnimationStrategy } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Stone } from "./stone.js";
import { Plate } from "./plate.js";

export class Door extends Actor {
    constructor() {
        super({
            pos: new Vector(288, 64),
            width: 64,
            height: 32,
            collisionType: CollisionType.Fixed
        });
        this.isOpen = false;
    }

    onInitialize(engine) {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.Door,
            grid: {
                rows: 1,
                columns: 6,
                spriteWidth: 64,
                spriteHeight: 64
            }
        })
        this.openAnimation = Animation.fromSpriteSheet(spriteSheet, range(0, 5), 100, AnimationStrategy.End)

        console.log('Attaching end event listener to openAnimation');
        this.openAnimation.events.on('end', () => {
            console.log('Door animation ended');
            this.body.collisionType = CollisionType.Passive;
            this.graphics.use(this.open);
        });

        this.open = Animation.fromSpriteSheet(spriteSheet, range(5, 5), 100)
        this.closed = Animation.fromSpriteSheet(spriteSheet, range(0, 0), 100)
        this.graphics.use(this.closed)
        this.z = 1
    }

    openDoor() {
        if (this.isOpen == false) {
            console.log('Opening door...');
            this.isOpen = true;
            this.body.collisionType = CollisionType.Passive;
            this.graphics.use(this.openAnimation);
            console.log('Playing door animation...');
            this.openAnimation.play();
        } else (this.isOpen == true && this.hasBeenActivated == false); {
            console.log('Door is already open.');
        }
    }

}

