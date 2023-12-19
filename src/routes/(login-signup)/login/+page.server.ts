import { redirect, type Actions, fail } from '@sveltejs/kit'
import scp from 'set-cookie-parser'
import { url } from '$lib/server/url';
import { dev } from '$app/environment';



export const actions = {
    default: async ({request,fetch ,cookies})=>{
        const formData = await request.formData()
        const username  = formData.get("username")
        const password  = formData.get("password")
        const body = JSON.stringify({username,password})

        const res = await fetch(`${url}/users/login`, {
            body,
            method: "POST",
            credentials:'include',
            headers :{"content-type":"application/json"},
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
