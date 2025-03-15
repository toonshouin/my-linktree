<script lang="ts">
	import '../app.css';
	import '../app.scss';
	import { onMount, onDestroy } from 'svelte';
	import { initializeAmplitude, destroyAmplitude, reintAmplitude } from '$lib/amplitudejs';
	import { beforeNavigate } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import Social from '$lib/components/social.svelte';

	let amplitudeLoaded = false;

	// Create a global flag to track if we're handling a protocol link
	let handlingProtocolLink = false;

	// Only one onMount
	onMount(async () => {
		try {
			// Your original Amplitude initialization
			const res = await fetch('/data/songs.json');
			const data = await res.json();
			await initializeAmplitude(data.songs);
			amplitudeLoaded = true;

			// Add global click handler for ALL links
			document.addEventListener(
				'click',
				(event) => {
					// Find if a link was clicked
					const target = event.target;
					if (!(target instanceof Element)) return;

					const link = target.closest('a');
					if (!link) return;

					const href = link.getAttribute('href');
					if (!href) return;

					// Check for protocol links
					const protocols = ['mailto:', 'tel:', 'sms:', 'whatsapp:', 'tg:', 'msnim:'];
					const isProtocolLink = protocols.some((protocol) => href.startsWith(protocol));

					if (isProtocolLink) {
						console.log('Intercepted protocol link:', href);

						// Set the global flag to true
						handlingProtocolLink = true;

						// Use a timeout to reset the flag
						setTimeout(() => {
							handlingProtocolLink = false;
						}, 1000); // Keep it true for 1 second
					}
				},
				true
			);
		} catch (error) {
			console.error('Failed to initialize:', error);
		}
	});

	// Modify your beforeNavigate hook to check the flag
	beforeNavigate(({ to, cancel }) => {
		if (handlingProtocolLink) {
			console.log('Skipping Amplitude for protocol link navigation');
			return; // Skip Amplitude reset
		}

		// For all other navigation
		console.log('Regular navigation, running Amplitude code');
		destroyAmplitude();
		reintAmplitude();
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>ToonOeichi's Carrd!</title>
	<meta name="description" content="ToonOeichi's Carrd!"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="theme-color" content="#000000"/>
	<meta name="og:title" content="ToonOeichi's Carrd!"/>
	<meta name="og:description" content="ToonOeichi's Carrd!"/>
	<meta name="og:image" content="icon/oeichi-flat.svg"/>
</svelte:head>

<Header />
<Social />

{@render children()}
