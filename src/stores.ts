
import type { SecuredUserData } from "$lib/types/models";
import { writable, type Writable} from "svelte/store";


export const user: Writable<SecuredUserData|undefined > = writable(undefined)