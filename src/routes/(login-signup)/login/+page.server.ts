import { redirect, type Actions, fail } from '@sveltejs/kit'
import type { PageServerLoad} from './$types';
import { dev } from '$app/environment';
import scp from 'set-cookie-parser'

//only  checks if is logged not authenticate if it is valid
export const load  : PageServerLoad= async ({locals, cookies}) => {
    // const sessionId = cookies.get("jwt");
    // //redirects to the main page
    // if (sessionId){
    //     throw redirect(301,"/game/vivarium")
    // }
}

export const actions = {
    default: async ({request,fetch, cookies})=>{
        const formData = await request.formData()
        const username  = formData.get("username")
        const password  = formData.get("password")
        const body = JSON.stringify({username,password})

        const res = await fetch(`http://localhost:8080/api/users/login`, {
            body,
            method: "POST",
            headers :{"content-type":"application/json"},
            credentials :"include"
        })

        //TODO make better status check
        if (res.ok){
            const setCookie = res.headers.get('set-cookie')
            const parsed = scp.parse(setCookie!)

            parsed.forEach((cookie) =>{
                cookies.set(cookie.name,cookie.value,{
                    secure:!dev,
                    httpOnly: cookie.httpOnly,
                    sameSite : !cookie.sameSite,//was 'none'
                    path:cookie.path,
                    expires: cookie.expires
                })
            })

            throw redirect (301,"/")

        }
        else if (res.status === 401){
            return fail(res.status,{ username, incorrect :true })
        }
    }
} satisfies Actions
