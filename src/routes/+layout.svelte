<script lang="ts">
    import '../app.css';
    import '../app.scss'
	import '$lib/amplitudejs';
    import Header from '$lib/components/header.svelte';
    import Social from '$lib/components/social.svelte';
    let { children } = $props();
</script>

<Header/>
<Social/>

{@render children()}
