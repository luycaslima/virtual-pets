import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async ({fetch })=>{
    const res = await fetch(`http://localhost:8080/api/species`)
    const data = await res.json()

    const pets = data.data.data
    return {pets}
}