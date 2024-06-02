import { Actor, Vector, Keys, CollisionType, SpriteSheet, range, Animation } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';

export class Player extends Actor {
    constructor() {
        super({
            pos: new Vector(122, 144),
            width: 17,
            height: 26,
            collisionType: CollisionType.Active,
        });
    }

    onInitialize(engine) {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {
                rows: 4,
                columns: 5,
                spriteWidth: 32,
                spriteHeight: 32
            },
        });
        //walking
        this.runAnimationDown = Animation.fromSpriteSheet(spriteSheet, range(1, 4), 100);
        this.runAnimationLeft = Animation.fromSpriteSheet(spriteSheet, range(6, 9), 100);
        this.runAnimationUp = Animation.fromSpriteSheet(spriteSheet, range(11, 14), 100);
        this.runAnimationRight = Animation.fromSpriteSheet(spriteSheet, range(16, 19), 100);
        //idle
        this.runAnimationDownIdle = Animation.fromSpriteSheet(spriteSheet, range(0, 0), 100);
        this.runAnimationLeftIdle = Animation.fromSpriteSheet(spriteSheet, range(5, 5), 100);
        this.runAnimationUpIdle = Animation.fromSpriteSheet(spriteSheet, range(10, 10), 100);
        this.runAnimationRightIdle = Animation.fromSpriteSheet(spriteSheet, range(15, 15), 100);

        this.graphics.use(this.runAnimationDownIdle);
        this.currentAnimation = this.runAnimationDownIdle;
        this.z = 5
    }

    noMovementKeysHeld(engine) {
        return !(
            engine.input.keyboard.isHeld(Keys.W) ||
            engine.input.keyboard.isHeld(Keys.A) ||
            engine.input.keyboard.isHeld(Keys.S) ||
            engine.input.keyboard.isHeld(Keys.D) ||
            engine.input.keyboard.isHeld(Keys.Up) ||
            engine.input.keyboard.isHeld(Keys.Left) ||
            engine.input.keyboard.isHeld(Keys.Down) ||
            engine.input.keyboard.isHeld(Keys.Right)
        );
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -150;
            if (this.currentAnimation !== this.runAnimationLeft) {
                this.graphics.use(this.runAnimationLeft);
                this.currentAnimation = this.runAnimationLeft;
            }
        } else if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 150;
            if (this.currentAnimation !== this.runAnimationRight) {
                this.graphics.use(this.runAnimationRight);
                this.currentAnimation = this.runAnimationRight;
            }
        } else if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -150;
            if (this.currentAnimation !== this.runAnimationUp) {
                this.graphics.use(this.runAnimationUp);
                this.currentAnimation = this.runAnimationUp;
            }
        } else if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 150;
            if (this.currentAnimation !== this.runAnimationDown) {
                this.graphics.use(this.runAnimationDown);
                this.currentAnimation = this.runAnimationDown;
            }
        }

        if (this.noMovementKeysHeld(engine)) {
            if (this.currentAnimation === this.runAnimationRight) {
                this.graphics.use(this.runAnimationRightIdle);
                this.currentAnimation = this.runAnimationRightIdle;
            } else if (this.currentAnimation === this.runAnimationLeft) {
                this.graphics.use(this.runAnimationLeftIdle);
                this.currentAnimation = this.runAnimationLeftIdle;
            } else if (this.currentAnimation === this.runAnimationUp) {
                this.graphics.use(this.runAnimationUpIdle);
                this.currentAnimation = this.runAnimationUpIdle;
            } else if (this.currentAnimation === this.runAnimationDown) {
                this.graphics.use(this.runAnimationDownIdle);
                this.currentAnimation = this.runAnimationDownIdle;
            }
        }
        this.vel = new Vector(xspeed, yspeed);
    }
}