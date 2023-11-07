import type { SecuredUserData, UserData } from "$lib/types/user";
import type { PageServerLoad } from "./$types";

 
//TODO tudo que for sigiloso da api passar pelo server tudo q n for passar pela pagiaa normal

//Params por default pega o route name entre colchetes
export const load :PageServerLoad = ({fetch, params}) => {
    
    const fetchUser = async (username :string) : Promise<SecuredUserData> =>{
        const response : Response = await fetch(`http://localhost:8080/api/users/${username}`)
        const data = (await response.json())
        
        const { user } = data.data
        const {password , id , ...securedUser} = user //omit the password and id

        return securedUser as SecuredUserData
    }
    
    return {
        user: fetchUser(params.username)
    }
}