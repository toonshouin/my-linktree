<script>
	import Amplitude from "$lib/components/player.svelte";
    import Quotes from "$lib/components/quotes.svelte";
    import '$lib/quotesv'
</script>

<div class="flex flex-col justify-center items-center space-x-2 space-y-2 p-4">
    <div class="card bg-base-100 card-border border-base-300 shadow-lg w-full">
        <div class="card-body">
            <div class="pb-4">
                <Amplitude />
            </div>
            <div class="pb-4">
                <Quotes />
            </div>
            <a class="btn bg-neutral text-white border-base-300" href="https://www.toonstorytime.me" target="_blank" rel="noopener noreferrer">
                <img src="icon/Globe_icon.svg" alt="Globe Icon" class="w-[1rem] mr-2" />
                Website
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="https://resume.toonstorytime.me" target="_blank" rel="noopener noreferrer">
                <img src="icon/read-cv.svg" alt="CV Icon" class="w-[1rem] mr-2" />
                Resume
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="https://ngl.link/toonaoeychi" target="_blank" rel="noopener noreferrer">
                <img src="icon/ngl.avif" alt="NGL Icon" class="w-[1rem] mr-2" />
                <span>NGL &lt;3</span>
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="donate">
                <img src="https://icons.hackclub.com/api/icons/white/card" alt="Card Icon" class="w-[1rem] mr-2" />
                Donate
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="stuff">
                <img src="icon/shopping.svg" alt="Shopping Icon" class="w-[1rem] mr-2" />
                Shopping List
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="links">
                <img src="icon/link.svg" alt="Shopping Icon" class="w-[1rem] mr-2" />
                All Links
            </a>
        </div>
    </div>
</div>
