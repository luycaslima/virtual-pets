import type { Point, Sprite } from "pixi.js";


export interface Component  {
    id: number;
};

export interface TransformComponent extends Component {
    position: Point,
    scale: Point,
    rotation: number;
};

export interface SpriteComponent extends Component{
    sprite : Sprite;
}