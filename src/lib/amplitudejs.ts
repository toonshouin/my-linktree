import { browser } from '$app/environment';
import { yt_url, song_link, index, songs as songsStore } from '$lib/stores/amplitude';
import { get } from 'svelte/store';

// Use local variables for internal handling if needed
let songs = [];
if (browser) {
  (async () => {
    try {
      // Import the library correctly
      const AmplitudeModule = await import('amplitudejs');
      const Amplitude = AmplitudeModule.default || AmplitudeModule;
      
      // Fetch songs data
      const res = await fetch('/data/songs.json');
      const data = await res.json();
      songs = data.songs;
      
      // Update the store with the fetched songs
      songsStore.set(songs);

      // Initialize Amplitude
      Amplitude.init({
        songs: songs,
        shuffle_on: true,
        debug: true, // Helps you see initialization issues
        callbacks: {
          initialized: function() {
            // Set initial values after initialization is complete
            try {
              const activeIndex = Amplitude.getActiveIndex();
              const activeSongMetadata = Amplitude.getActiveSongMetadata();
              
              if (activeIndex !== undefined) {
                index.set(activeIndex);
              } else {
                index.set(0); // Set default index if none is active
              }
              
              // Reset URLs to empty if metadata is not available
              if (!activeSongMetadata) {
                yt_url.set('');
                song_link.set('');
                return;
              }
              
              // Handle YouTube URL
              if (activeSongMetadata.yt_url && typeof activeSongMetadata.yt_url === 'string') {
                yt_url.set(activeSongMetadata.yt_url);
              } else {
                yt_url.set(''); // Reset to empty if not valid
              }
              
              // Handle Song.link URL
              if (activeSongMetadata.song_link && typeof activeSongMetadata.song_link === 'string') {
                song_link.set(activeSongMetadata.song_link);
              } else {
                song_link.set(''); // Reset to empty if not valid
              }
              
              console.log('Initial song set:', activeIndex);
              console.log('Initial metadata:', activeSongMetadata);
              console.log('Current stores:', {
                index: get(index),
                yt_url: get(yt_url),
                song_link: get(song_link)
              });
            } catch (error) {
              console.error("Error in initialized callback:", error);
              // Reset values on error
              yt_url.set('');
              song_link.set('');
            }
          },
          song_change: function() {
            try {
              const activeIndex = Amplitude.getActiveIndex();
              const activeSongMetadata = Amplitude.getActiveSongMetadata();
              
              if (activeIndex !== undefined) {
                index.set(activeIndex);
              }
              
              // Reset URLs to empty if metadata is not available
              if (!activeSongMetadata) {
                yt_url.set('');
                song_link.set('');
                console.log('No metadata available, reset URLs');
                return;
              }
              
              // Handle YouTube URL
              if (activeSongMetadata.yt_url && typeof activeSongMetadata.yt_url === 'string') {
                yt_url.set(activeSongMetadata.yt_url);
              } else {
                yt_url.set(''); // Reset to empty if not valid
              }
              
              // Handle Song.link URL
              if (activeSongMetadata.song_link && typeof activeSongMetadata.song_link === 'string') {
                song_link.set(activeSongMetadata.song_link);
              } else {
                song_link.set(''); // Reset to empty if not valid
              }
              
              console.log('Song changed to index:', activeIndex);
              console.log('Song metadata:', activeSongMetadata);
              console.log('Updated stores:', {
                index: get(index),
                yt_url: get(yt_url),
                song_link: get(song_link)
              });
            } catch (error) {
              console.error("Error in song_change callback:", error);
              // Reset values on error
              yt_url.set('');
              song_link.set('');
            }
          }
        }
      });
    } catch (error) {
      console.error("Error initializing AmplitudeJS:", error);
      // Reset store values on initialization error
      yt_url.set('');
      song_link.set('');
    }
  })();
}