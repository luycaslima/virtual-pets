import type { Component } from "./Component";

export default class Entity{
    private id : string;
    public name : string;

    private components : Array<Component>;

    constructor(_id:string , _name: string ){
        this.id = _id;
        this.name = _name;
        this.components = [];
    }

    addComponent(component : Component) : void{
        this.components.push(component);
    }
}