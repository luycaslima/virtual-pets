
export interface UserData {
    id : string
    username : string
    email : string
    password :string
    money : number
    pets :Array<string>
    vivarium :Array<string>
}

export interface SecuredUserData extends Omit<UserData,'password' | 'id'> {}

export interface Status{
    strength : number
    life : number
    defense : number
    agility : number
    skill : number
    intelligence : number
}

type StatusType = 'strength'| 'life'| 'defense'|'agility'|'skill'|'intelligence' 

export const statusTypes : Array<StatusType>= ['strength', 'life', 'defense','agility','skill','intelligence' ]


export interface Technique {

}

export interface Specie {
    id: string
    name : string
    baseStatus : Status
    learnableTechniques : Array<Technique>
}


