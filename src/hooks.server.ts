import { PRIVATE_SERVER_URL } from "$env/static/private";
import type { SecuredUserData } from "$lib/types/models";
import { redirect, type Handle, type HandleFetch} from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	if (request.url.startsWith(PRIVATE_SERVER_URL)) {
		// clone the original request, but change the URL
		// request = new Request(
		// 	request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
		// 	request,
		// );
	}

	return fetch(request);
};


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