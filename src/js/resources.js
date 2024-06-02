import { ImageSource, Loader } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

const Resources = {
    //Test Resources
    TestPlayer: new ImageSource('images/testplayer.png'),
    TestStone: new ImageSource('images/teststone.png'),
    TestPlate: new ImageSource('images/testplate.png'),
    TestDoor: new ImageSource('images/testdoor.png'),

    //Original Resources
    Player: new ImageSource('images/walk.png'),
    Stone: new ImageSource('images/Stone.png'),
    Plate: new ImageSource('images/Plate.png'),
    Door: new ImageSource('images/Door.png'),
    FirstLevel: new TiledResource('/images/Level_1_map.tmx'),
    Intro: new ImageSource('/images/intro.png'),
    Instruction: new ImageSource('/images/instructions.png'),
    End: new ImageSource('/images/ending.png'),
    BackGround: new ImageSource('images/background.png')
}

const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Stone,
    Resources.Plate,
    Resources.Door,
    Resources.FirstLevel,
    Resources.BackGround,
    Resources.Intro,
    Resources.Instruction,
    Resources.End,
]);



export { ResourceLoader, Resources };