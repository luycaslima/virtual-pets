import { dev } from "$app/environment"
import { PRIVATE_LOCAL_SERVER_URL, PRIVATE_SERVER_URL } from "$env/static/private"

export const url = dev ?  PRIVATE_LOCAL_SERVER_URL : PRIVATE_SERVER_URL  
//console.log(url)