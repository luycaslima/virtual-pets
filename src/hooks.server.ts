import { url } from "$lib/server/url";
import type { SecuredUserData } from "$lib/types/models";
import { redirect, type Handle} from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {    
    const authToken = event.cookies.get('jwt')
    //TODO call this only on login to not overload
    // if (authToken) {
    //     const res = await fetch(`${PRIVATE_SERVER_URL}/users`, {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             "content-type": "application/json",
    //             cookie: `jwt=${authToken}`
    //         }
    //     })
        
    //     //TODO update this after
    //     const data = await res.json()
    //     const { password, id, ...authUser } = data.data.data //TODO bether treat this data because jesus
    //     event.locals.authUser = authUser as SecuredUserData     
    // }else{
    //     event.locals.authUser = undefined
    // }

    if(!authToken){
        event.locals.authUser = undefined
    }else if(authToken && !event.locals.authUser){

        const res = await fetch(`${url}/users`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "content-type": "application/json",
                        cookie: `jwt=${authToken}`
                    }
                })
                
        //TODO update this after
        if(res.ok){
            const data = await res.json()
            const authUser  = data.data.data //TODO bether treat this data because jesus
            event.locals.authUser = authUser as SecuredUserData     
        }else {
            throw redirect(303,"/")
        }
        //console.log(data.data.data)
    }

    if (event.url.pathname.startsWith("/game")  && !authToken) {
        if (!event.locals.authUser) throw redirect(303, "/login")
        if(event.url.pathname ==="/game")throw redirect(303, "/")
    }


    if( (event.url.pathname.startsWith("/login") || (event.url.pathname.startsWith("/signup")) ) && authToken ){
        throw redirect(301,"/")
    }


    const response = await resolve(event)
    return response

}