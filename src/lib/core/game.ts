import { Application, SCALE_MODES, BaseTexture, settings, Sprite } from "pixi.js";

const MAX_WIDTH : number = 960;
const MAX_HEIGHT: number = 768;

export default class Game {
    constructor(){};

    private static app : Application;
    private static _width : number;
    private static _height: number;
    private static _currentScenePath : string;

    public static initialize(width : number, height : number, backgroundColor : number, canvas: HTMLCanvasElement) : void{
        Game._width = width;
        Game._height = height;
        
        Game.app = new Application({
            view: canvas as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            background: backgroundColor,
            width: width,
            height: height
        })
          
        //Pixel art style
        BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;
        settings.ROUND_PIXELS = true; //sharper imgs but movement can appear less smooth
        
        const spr : Sprite = Sprite.from('../sprites/aspect_test2.png');
        Game.app.stage.addChild(spr);
    }

    public static resizeHandler(innerWidth :number , innerHeight:number) : void {
        
        if(innerWidth > MAX_WIDTH && innerHeight > MAX_HEIGHT ){
            innerWidth = MAX_WIDTH;
            innerHeight = MAX_HEIGHT;
        }
        
        const scaleFactor= Game.calculateScale(innerWidth, innerHeight);
        
        const newSize: [number, number] = [
            Math.ceil(Game._width * scaleFactor),
            Math.ceil(Game._height * scaleFactor)
        ];

        Game.app.renderer.view.style!.width = `${newSize[0]}px`;
        Game.app.renderer.view.style!.height = `${newSize[1]}px`;

        Game.app.renderer.resize(newSize[0], newSize[1]);
        Game.app.stage.scale.set(scaleFactor);
    }

    private static calculateScale(innerWidth :number , innerHeight : number) : number{
        let scale : number = 3
        if(innerWidth < 960 && innerWidth > 640){
            scale = 2
        }else if( innerWidth < 640 && innerWidth > 320){
           //scale = 1;
            scale =  Math.min(
            innerWidth / Game._width,
            innerHeight / Game._height,
         );
        }else if( innerWidth < 320){
            scale = 1
        }
        return scale;
    }

    public static changeScene(/*currentPath : string*/) : void {
        //Game._currentScenePath = currentPath;
        console.log("mudou pagina")
    }

}