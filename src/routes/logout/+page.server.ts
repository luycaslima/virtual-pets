import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


//Does it need to fetch from server?
export const load : PageServerLoad = async ({ locals, cookies })=>{
    cookies.set('jwt','',{maxAge:0})
    locals.authUser = undefined
    
    throw redirect(301,"/login")
}