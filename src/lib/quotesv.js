import { quote , origin } from '$lib/stores/quotesv'
const out = await fetch('https://quotesv.vercel.app')
const qt = await out.json();

quote.set(qt.quote);
origin.set(qt.origin);