import type { LayoutServerLoad } from "./$types";


export const load : LayoutServerLoad = ({locals}) =>{
    const authUser = locals.authUser
    return {
        authUser
    }
}