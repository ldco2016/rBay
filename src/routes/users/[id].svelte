<script lang="ts">
	import Card from '$lib/components/card.svelte';
	export let username = '';
	export let sharedItems: any[] = [];
	export let likedItems: any[] = [];
</script>

<h1 class="text-3xl">{username}'s profile</h1>
<hr class="my-4" />

<h3>Items you <span>both</span> like</h3>
