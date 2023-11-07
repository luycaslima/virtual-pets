import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load  : PageServerLoad= async ({cookies}) => {
    // const sessionId = cookies.get("jwt");
    // //redirects to the main page
    // if (sessionId){
    //     throw redirect(301,"/game/vivarium")
    // }
}


export const actions = {
    default: async ({request,fetch}) => {
        const formData = await request.formData()
        const username  = formData.get("username")
        const password  = formData.get("password")
        const email = formData.get('email')
        const name = formData.get('name')

        const body = JSON.stringify({username,password,email,name})
        
        const res = await fetch(`http://localhost:8080/api/users/register`, {
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