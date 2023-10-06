import { Application, SCALE_MODES, BaseTexture, settings } from "pixi.js";


export default class Game {
    constructor(){};

    private static app : Application;
    
    public static initialize(width : number, height : number, backgroundColor : number, canvas: HTMLCanvasElement) : void{
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
    
    }

}