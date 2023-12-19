import type { SecuredUserData } from "$lib/types/models";
import type { PageServerLoad } from "./$types";
import { url } from "$lib/server/url";
 
//TODO tudo que for sigiloso da api passar pelo server tudo q n for passar pela pagiaa normal

//Params por default pega o route name entre colchetes
export const load :PageServerLoad = ({fetch, params}) => {
    
    const fetchUser = async (username :string) : Promise<SecuredUserData> =>{
         const response : Response = await fetch(`${url}/users/${username}`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
         })

         const data = (await response.json())
        
         const { user } = data.data
         const {email , ...securedUser} = user //omit the password and id

         return securedUser as SecuredUserData
    }
    
    return {
        user: fetchUser(params.username)
    }
}