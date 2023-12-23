import { url } from '$lib/server/url';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load : PageServerLoad = async ({fetch ,setHeaders})=>{
    const res = await fetch(`${url}/species`,{
        method:'GET',
        credentials:'include'
    })
    const data = await res.json()

    const cacheControl = res.headers.get("cache-control")

    //TODO set cache control in all GETTERS
    if(cacheControl && res.ok){
        setHeaders({'cache-control': cacheControl})
    }

    if(!res.ok){
        throw error(res.status)
    }

    const species = data.data.data
    return {species: species}
}

export const actions ={
    default: async({request,fetch,cookies}) =>{
        const formData = await request.formData()
        const specieID  = formData.get('specie')  
        const petName = formData.get('petName')
        const body = JSON.stringify({petName,specieID})
        
        const cookie = cookies.get('jwt')

        let res = await fetch(`${url}/pets`, {
            method: 'POST',
            body,
            credentials: "include",
            headers: {
                "content-type": "application/json",
                cookie: `jwt=${cookie}`
            }
        })

        if(res.ok){
         
            const data = await res.json()
            const petID =  data.data.data 
            let petRes = await fetch(`${url}/users/pet/${petID}`,{
                method: 'PUT',
                credentials:'include',
                headers:{
                    "content-type": "application/json",
                    cookie: `jwt=${cookie}`
                }
            })

            if(petRes.ok){
                const result = await petRes.json()
                console.log(result.data.data)
            }else{
                //TODO treat errors and return success
            }
        }else{
            console.log(res)
        }
    }
}