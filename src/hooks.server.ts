import type { SecuredUserData } from "$lib/types/user";
import { redirect, type Handle } from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {    
    const authToken = event.cookies.get('jwt')
    
    if (authToken) {
        const res = await fetch(`http://localhost:8080/api/users`, {
            method: "GET",
            credentials: "include",
            headers: {
                "content-type": "application/json",
                cookie: `jwt=${authToken}`
            }
        })
        
        //TODO update this after
        const data = await res.json()
        const { password, id, ...authUser } = data.data.data //TODO bether treat this data because jesus
        event.locals.authUser = authUser as SecuredUserData     
    }else{
        event.locals.authUser = undefined
    }

    if (event.url.pathname.startsWith("/game") && !authToken) {
        if (!event.locals.authUser) throw redirect(303, "/login")
        if(event.url.pathname ==="/game")throw redirect(303, "/")
    }


    if( (event.url.pathname.startsWith("/login") || (event.url.pathname.startsWith("/signup")) ) && authToken ){
        throw redirect(301,"/")
    }


    const response = await resolve(event)
    return response

}