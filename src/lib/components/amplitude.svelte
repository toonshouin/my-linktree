<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let songs = [];
  let index = 0;
  let yt_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  let song_link = "https://song.link/i/1624945512";
  
  onMount(async () => {
    if (browser) {
      try {
        // Import the library correctly
        const AmplitudeModule = await import('amplitudejs');
        const Amplitude = AmplitudeModule.default;

        // Fetch songs data if not provided as a prop
        if (songs.length === 0) {
          try {
            const response = await fetch('/data/songs.json');
            const data = await response.json();
            songs = data.songs;
          } catch (error) {
            console.error("Failed to load songs data:", error);
          }
        }
        
        // Initialize Amplitude
        Amplitude.init({
          songs: songs,
          shuffle_on: true,
          debug: true, // Helps you see initialization issues
          callbacks: {
            song_change: function() {
              index = Amplitude.getActiveIndex();
              yt_url = Amplitude.getActiveSongMetadata().yt_url;
              song_link = Amplitude.getActiveSongMetadata().song_link;
              console.log('Song changed:', index);
            }
          }
        });

        yt_url = Amplitude.getActiveSongMetadata().yt_url;
        song_link = Amplitude.getActiveSongMetadata().song_link;
        
      } catch (error) {
        console.error("Error initializing AmplitudeJS:", error);
      }
    }
  });
</script>

<div class="card bg-base-100 card-border border-base-300 shadow-lg w-full overflow-hidden">
  <div class="bg-base-300 py-4 px-2">
    <div class="mb-2 text-center">
      <h6 class="card-title text-center justify-center" data-amplitude-song-info="name">Never Gonna Give You Up</h6>
      <p data-amplitude-song-info="artist">Rick Astley</p>
    </div>
    <div class="mb-2 inline text-center">
      <a href="{yt_url}"><span class="text-sm font-bold">Youtube</span></a>
      <span class="text-sm"> | </span>
      <a href="{song_link}"><span class="text-sm font-bold">Song.link</span></a>
    </div>
  </div>
    <div class="border-base-300 flex flex-col border-t py-2 px-2">
      <div class="flex justify-center items-center space-x-4">
        <button aria-label="Left Button" class="btn btn-ghost btn-lg amplitude-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"></path></svg></button>
        <button aria-label="Play Button" class="btn btn-ghost btn-lg amplitude-play-pause"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path></svg></button>
        <button aria-label="Right Button" class="btn btn-ghost btn-lg amplitude-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"></path></svg></button>
      </div>
      <div class="flex justify-center items-center mt-2 space-x-4">
        <input type="range" class="range amplitude-song-slider w-full" />
      </div>
      <div class="flex justify-between text-xs opacity-50">
        <span class="amplitude-current-time">00:00</span>
        <span class="amplitude-duration-time">99:99</span>
      </div>
      <div class="flex justify-center items-center mt-2 space-x-4">
        <button aria-label="Mute Button" class="btn btn-ghost btn-lg amplitude-mute"><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        <input type="range" class="range amplitude-volume-slider w-full" />
      </div>
    </div>
</div>
