// See https://kit.svelte.dev/docs/types#app

import type { SecuredUserData } from "$lib/types/user";

// for information about these interfaces
declare global {
	namespace App {

		interface Locals{
			authUser: SecuredUserData | undefined
		}
		interface Error {
			message: string;
			errorId: string;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
