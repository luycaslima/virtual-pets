
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
