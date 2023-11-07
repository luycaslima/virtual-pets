
import type { SecuredUserData } from "$lib/types/user";
import { writable, type Writable} from "svelte/store";


export const user: Writable<SecuredUserData|undefined > = writable(undefined)
