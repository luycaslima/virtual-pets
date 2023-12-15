import type { Specie } from '$lib/types/models';
import type { PageServerLoad } from './$types';



export const load : PageServerLoad = async ({fetch })=>{
    const res = await fetch(`http://localhost:8080/api/species`)
    const data = await res.json()

    const species = data.data.data
    return {species: species}
}

//TODO implement https://joyofcode.xyz/sveltekit-environment-variables
export const actions ={
    default: async({request,fetch,cookies}) =>{
        const formData = await request.formData()
        const specieID  = formData.get('specie')  
        const petName = formData.get('petName')
        const body = JSON.stringify({petName,specieID})
        
        const cookie = cookies.get('jwt')

        let res = await fetch(`http://localhost:8080/api/pets`, {
            method: 'POST',
            body,
            credentials: "include",
            headers: {
                "content-type": "application/json",
                cookie: `jwt=${cookie}`
            }
        })

        if(res.ok){
            console.log(res.body)
            //const petID = 
            //res = await fetch(`http://localhost:8080//api/users/pet/{petID}`)


        }else{
            console.log(res)
        }

        
        //TODO call to create a pet , wait the id comeback or treat error , after call to link to player and repeat
    }
}