import { dev } from "$app/environment"
import { env } from "$env/dynamic/private"

export const url = dev ?  env.PRIVATE_LOCAL_SERVER_URL : env.PRIVATE_SERVER_URL  
//console.log(url)