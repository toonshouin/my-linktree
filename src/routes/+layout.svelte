<script lang="ts">
	import '../app.css';
	import '../app.scss';
	import { onMount, onDestroy } from 'svelte';
	import { initializeAmplitude, destroyAmplitude, reintAmplitude } from '$lib/amplitudejs';
	import { beforeNavigate } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import Social from '$lib/components/social.svelte';

	let amplitudeLoaded = false;

	onMount(async () => {
		try {
			// Fetch songs
			const res = await fetch('/data/songs.json');
			const data = await res.json();

			// Initialize with fetched songs
			await initializeAmplitude(data.songs);
			amplitudeLoaded = true;
		} catch (error) {
			console.error('Failed to initialize in component:', error);
		}
	});

	beforeNavigate(({ to, cancel }) => {
		destroyAmplitude();
		reintAmplitude();
	});

	onDestroy(() => {
		destroyAmplitude();
		reintAmplitude();
	});

	let { children } = $props();
</script>

<Header />
<Social />

{@render children()}
