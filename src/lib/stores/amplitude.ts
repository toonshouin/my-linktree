import { writable } from 'svelte/store';

export const yt_url = writable('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
export const song_link = writable('https://song.link/i/1624945512');
export const index = writable(0);
export const songs = writable([]);
export const isPlaying = writable(false);