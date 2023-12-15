import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PRIVATE_SERVER_URL } from "$env/static/private";

// export const load  : PageServerLoad= async ({cookies}) => {
//     // const sessionId = cookies.get("jwt");
//     // //redirects to the main page
//     // if (sessionId){
//     //     throw redirect(301,"/game/vivarium")
//     // }
// }


export const actions = {
    default: async ({request,fetch}) => {
        const formData = await request.formData()
        const username  = formData.get("username")
        const password  = formData.get("password")
        const email = formData.get('email')
        const name = formData.get('name')

        const body = JSON.stringify({username,password,email,name})
        
        const res = await fetch(`${PRIVATE_SERVER_URL}/users/register`, {
            body,
            method: "POST",
            headers :{"content-type":"application/json"},
        })


        //TODO better checking
        if (res.ok){
            throw redirect(301,"/login")
        }
    }
}