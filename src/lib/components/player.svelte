<script lang="ts">
	import { yt_url , song_link, isPlaying } from "$lib/stores/amplitude";
  import { remapPlayer } from "$lib/amplitudejs";

  remapPlayer();

</script>

<div class="card bg-base-100 card-border border-base-300 shadow-lg w-full overflow-hidden">
  <div class="bg-base-300 py-4 px-4">
    <div class="mb-2 text-center">
      <h6 class="card-title text-center justify-center" data-amplitude-song-info="name">Never Gonna Give You Up</h6>
      <p data-amplitude-song-info="artist">Rick Astley</p>
    </div>
    <div class="mb-2 inline text-center">
      {#if $yt_url && $yt_url.trim() !== ""}
        <a href="{$yt_url}" target="_blank" rel="noopener noreferrer">
          <span class="text-sm font-bold">Youtube</span>
        </a>
      {/if}
      
      {#if ($yt_url && $yt_url.trim() !== "") && ($song_link && $song_link.trim() !== "")}
        <span class="text-sm"> | </span>
      {/if}
      
      {#if $song_link && $song_link.trim() !== ""}
        <a href="{$song_link}" target="_blank" rel="noopener noreferrer">
          <span class="text-sm font-bold">Song.link</span>
        </a>
      {/if}
    </div>
  </div>
    <div class="border-base-300 flex flex-col border-t pt-2 pb-4 px-4">
      <div class="flex justify-center items-center space-x-4">
        <button aria-label="Left Button" class="btn btn-ghost btn-lg amplitude-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"></path></svg></button>
        <button aria-label="Play Button" id="playbtn" class="btn btn-ghost btn-lg amplitude-play-pause"><img id="play-state" class="w-[2rem]" aria-label="Play/Pause Button" alt="Play/Pause Button" src={$isPlaying ? 'icon/pause.svg' : 'icon/play.svg'}></button>
        <button aria-label="Right Button" class="btn btn-ghost btn-lg amplitude-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"></path></svg></button>
      </div>
      <div class="flex justify-center items-center mt-2 space-x-4">
        <input type="range" class="range range-xs range-player amplitude-song-slider w-full" />
      </div>
      <div class="flex justify-between text-2xs opacity-50">
        <span class="amplitude-current-time">00:00</span>
        <span class="amplitude-duration-time">99:99</span>
      </div>
    </div>
</div>

<style>
  .range {
    --range-thumb: var(--color-base-content);
    height: unset;
  }
</style>
