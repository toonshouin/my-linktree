<script>
	import Amplitude from "$lib/components/player.svelte";
    import Quotes from "$lib/components/quotes.svelte";
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
                <img src="Globe_icon.svg" alt="Globe Icon" class="w-[1rem] mr-2" />
                Website
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="https://resume.toonstorytime.me" target="_blank" rel="noopener noreferrer">
                <img src="read-cv.svg" alt="CV Icon" class="w-[1rem] mr-2" />
                Resume
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="https://ngl.link/toonaoeychi" target="_blank" rel="noopener noreferrer">
                <img src="ngl.avif" alt="NGL Icon" class="w-[1rem] mr-2" />
                <span>NGL &lt;3</span>
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="stuff">
                <img src="shopping.png" alt="Shopping Icon" class="w-[1rem] mr-2" />
                ของป้ายยาทั้งหมด
            </a>
        </div>
    </div>
</div>