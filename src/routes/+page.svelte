<script>
	import Amplitude from "$lib/components/player.svelte";
</script>

<div class="flex flex-col justify-center items-center space-x-2 space-y-2 p-4">
    <div class="card bg-base-100 card-border border-base-300 shadow-lg w-full">
        <div class="card-body">
            <div class="pb-4">
                <Amplitude />
            </div>
            <a class="btn bg-neutral text-white border-base-300" href="https://www.toonstorytime.me" target="_blank" rel="noopener noreferrer">
                <img src="Globe_icon.svg" alt="Globe Icon" class="w-[1rem] mr-2" />
                Website
            </a>
            <a class="btn bg-neutral text-white border-base-300" href="https://resume.toonstorytime.me" target="_blank" rel="noopener noreferrer">
                <img src="read-cv.svg" alt="Globe Icon" class="w-[1rem] mr-2" />
                Resume
            </a>
        </div>
    </div>
</div>