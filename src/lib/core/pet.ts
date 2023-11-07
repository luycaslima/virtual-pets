import type { Sprite } from "pixi.js"
import type { StatusComponent } from "./ECS/component"



export default interface IPet {
    petName: string
    sprite: Sprite //Enquanto n for animado deixar assim
    status : StatusComponent;
}