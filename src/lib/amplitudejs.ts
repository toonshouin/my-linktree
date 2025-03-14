import { browser } from '$app/environment';
import { yt_url, song_link, index, songs as songsStore } from '$lib/stores/amplitude';
import { get } from 'svelte/store';

let songs = [];
let Amp = null;
let isInitialized = false;

// Set songs function
function setSongs(songsData) {
  songs = songsData;
  return songs;
}

// Initialize Amplitude function
async function initializeAmplitude(songsData = null) {
  // Only run in browser environment
  if (!browser) {
    console.log('Skipping Amplitude initialization (server-side)');
    return null;
  }
  
  if (isInitialized) return Amp;
  
  try {
    // Set songs if provided
    if (songsData) {
      setSongs(songsData);
    }
    
    // Then, load Amplitude (browser-only import)
    const AmplitudeModule = await import('amplitudejs');
    Amp = AmplitudeModule.default || AmplitudeModule;
    
    // Initialize Amplitude with the songs
    Amp.init({
      songs: songs,
      shuffle_on: true,
      debug: true,
      callbacks: {
        initialized: function() {
          if (!browser) return;
          
          try {
            const activeIndex = Amp.getActiveIndex();
            const activeSongMetadata = Amp.getActiveSongMetadata();
            
            if (activeIndex !== undefined) {
              index.set(activeIndex);
            } else {
              index.set(0);
            }
            
            if (!activeSongMetadata) {
              yt_url.set('');
              song_link.set('');
              return;
            }
            
            if (activeSongMetadata.yt_url && typeof activeSongMetadata.yt_url === 'string') {
              yt_url.set(activeSongMetadata.yt_url);
            } else {
              yt_url.set('');
            }
            
            if (activeSongMetadata.song_link && typeof activeSongMetadata.song_link === 'string') {
              song_link.set(activeSongMetadata.song_link);
            } else {
              song_link.set('');
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
            yt_url.set('');
            song_link.set('');
          }
        },
        song_change: function() {
          if (!browser) return;
          
          try {
            const activeIndex = Amp.getActiveIndex();
            const activeSongMetadata = Amp.getActiveSongMetadata();
            
            if (activeIndex !== undefined) {
              index.set(activeIndex);
            }
            
            if (!activeSongMetadata) {
              yt_url.set('');
              song_link.set('');
              console.log('No metadata available, reset URLs');
              return;
            }
            
            if (activeSongMetadata.yt_url && typeof activeSongMetadata.yt_url === 'string') {
              yt_url.set(activeSongMetadata.yt_url);
            } else {
              yt_url.set('');
            }
            
            if (activeSongMetadata.song_link && typeof activeSongMetadata.song_link === 'string') {
              song_link.set(activeSongMetadata.song_link);
            } else {
              song_link.set('');
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
            yt_url.set('');
            song_link.set('');
          }
        }
      }
    });
    
    isInitialized = true;
    return Amp;
  } catch (error) {
    console.error('Failed to initialize Amplitude:', error);
    throw error;
  }
}

// Clean up Amplitude
function destroyAmplitude() {
  if (!browser) return;
  
  if (Amp && isInitialized) {
    // Stop any playing audio
    if (Amp.getPlayerState()) {
      Amp.stop();
    }
    
    // If Amplitude has a destroy method, call it
    if (typeof Amp.destroy === 'function') {
      Amp.destroy();
      Amp = null;
    }
    
    isInitialized = false;
    console.log('Amplitude destroyed');
  }
}

// Reinitialize Amplitude
async function reintAmplitude(songsData = null) {
  if (!browser) return null;
  
  if (!isInitialized) {
    try {
      return await initializeAmplitude(songsData);
    } catch (error) {
      console.error("Failed to reinitialize Amplitude:", error);
      throw error;
    }
  }
  return Amp;
}

// Get the initialized instance
function getAmplitude() {
  if (!browser) {
    console.warn('Amplitude not available on server-side');
    return null;
  }
  
  if (!isInitialized) {
    throw new Error('Amplitude not initialized. Call initializeAmplitude() first');
  }
  return Amp;
}

function remapPlayer() {
  if (!browser) return;
  
  if (Amp && isInitialized) {
    Amp.bindNewElements();
    console.log('Remapped Amplitude player');
  }
}

export { initializeAmplitude, getAmplitude, destroyAmplitude, reintAmplitude, setSongs, remapPlayer };