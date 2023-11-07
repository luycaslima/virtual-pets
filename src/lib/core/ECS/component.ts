import type { Point, Sprite } from "pixi.js";



export interface Component  {
};

export interface TransformComponent extends Component {
    position: Point,
    scale: Point,
    rotation: number;
};

export interface SpriteComponent extends Component{
    sprite : Sprite;
}

export interface StatusComponent extends Component{
    life : number;
    strength : number;
    defense  : number;
    skill : number;
    speed: number;
    inteligence : number;
    loyalty : number;
    happyness: number;
    hunger : number;
    cleaness : number;
    //type
    //debuff
    //Rank/lvl baseado nos pontos acima
}

export interface BoxColliderComponent extends Component{

}