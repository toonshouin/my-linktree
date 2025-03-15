import { quote, origin } from '$lib/stores/quotesv';

fetch("https://quotesv.vercel.app")
  .then(response => response.json())
  .then(data => {
    quote.set(data.quote);
    origin.set(data.origin);
  })
  .catch(error => {
    console.error("Error fetching quote:", error);
  });