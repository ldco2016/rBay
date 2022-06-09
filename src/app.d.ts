/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	type _Session = import('$services/types').Session;

	interface Locals {
		session: _Session;
	}
	// interface Platform {}
	interface Session extends _Session {}
	// interface Stuff {}
}
