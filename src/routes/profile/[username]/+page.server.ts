import type { SecuredUserData, UserData } from "$lib/types/models";
import type { PageServerLoad } from "./$types";
import {PRIVATE_SERVER_URL} from '$env/static/private'
 
//TODO tudo que for sigiloso da api passar pelo server tudo q n for passar pela pagiaa normal

//Params por default pega o route name entre colchetes
export const load :PageServerLoad = ({fetch, params}) => {
    
    const fetchUser = async (username :string) : Promise<SecuredUserData> =>{
         const response : Response = await fetch(`${PRIVATE_SERVER_URL}/users/${username}`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
         })

         //console.log(response)

         const data = (await response.json())
        
         const { user } = data.data
         const {password , id , ...securedUser} = user //omit the password and id

         return securedUser as SecuredUserData
    }
    
    return {
        user: fetchUser(params.username)
    }
}