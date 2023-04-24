const quotes = [
    "\"A hopeless romantic all my life Surrounded by couples all the time I guess I should take it as a sign.\" - Cupid (Twin Ver) by FIFTY FIFTY",
    "Some Temporary string here. - Merlin on Windows Whistler build 2410",
    "\"The cake is a lie.\" - Portal",
    "\"You, [Subject Name Here], Must Be The Pride Of [Subject Hometown Here]\" - GlaDOS, Portal",
    "\"Despite Your Violent Behavior, The Only Thing You’ve Managed To Break So Far Is My Heart.\" - GlaDOS, Portal",
    "\"Weeeeeeeeeeeeeeeeeeeeee[bzzt]\" - GlaDOS, Portal",
    "\"You don't even care. Do you?\" - GlaDOS, Portal",
    "\"Two plus two is ten... IN BASE FOUR! I'M FINE!\" - GlaDOS, Portal",
    "\"I think that one was about to say 'I love you.' They ARE sentient, of course. We just have a LOT of them.\" - GlaDOS, Portal 2",
    "\"You look great, by the way. Very healthy.\" - GlaDOS, Portal 2",
    "\"I didn't see the deer today. I did see some humans. But with you here I've got more test subjects than I'll ever need.\" - GlaDOS, Portal 2",
    "\"Black Mesa can eat my bankrupt--\" - Cave Johnson, Portal 2",
    "\"When life gives you lemons? Don't make lemonade. Make life take the lemons back!\" - Cave Johnson, Portal 2",
    "\"You're here because we want the best, and you are it. So: Who is ready to make some science?\" - Cave Johnson, Portal 2",
    "\"Sorry, fellas. She's married. To science.\" - Cave Johnson, Portal 2",
    "\"I forgive you everything (you monster)\" - You Wouldn't Know by Jonathan Coulton & Ellen McLain",
    "\"I can guess the reasons why you are never coming by for me...\" - You Wouldn't Know by Jonathan Coulton & Ellen McLain",
    "\"I'm feeling lonely Oh, I wish I'd find a lover that could hold me.\" - Cupid (Twin Ver) by FIFTY FIFTY",
    "\"So skeptical of love But still, I want it more, more, more.\" - Cupid (Twin Ver) by FIFTY FIFTY",
    "\"I gave a second chance to Cupid But now, I'm left here feeling stupid.\" - Cupid (Twin Ver) by FIFTY FIFTY",
    "\"Is loving as good as they say?\" - Cupid (Twin Ver) by FIFTY FIFTY",
    "\"Someday, You will get some memories you never forget, and then you have to save them with something to remind you every time, and you can't see it without smiling.\" - Me",
    "I cut my hair because you don't care about my heart.",
    "\"Last Christmas, I gave you my heart But the very next day, you gave it away\" - Last Christmas by Wham!",
    "\"Change everything expect someone in my heart.\" - Me",
    "\"After last night, I think I'm in love with you\" - After Last Night by Bruno Mars , Anderson .Paak & Silk Sonic",
    "\"Good morning teacher. How are you today? I'm fine, I'm okay. Better than our yesterday.\" - Good Morning Teacher by Atom Chanakan",
    "\"But the important thing is you're back. With me. And now I'm onto all your little tricks. So there's nothing to stop us from testing for the rest of your life.\" - GlaDOS, Portal 2",
    "\"I'm not even angry. I'm being so sincere right now. Even though you broke my heart and killed me.\" - Slive Alive by Jonathan Coulton",
    "\"Go ahead and leave me. I think I prefer to stay inside.\" - Slive Alive by Jonathan Coulton",
];

const generateBtn = document.getElementById("generate-btn");
const quoteContainer = document.getElementById("quote-container");
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
quoteContainer.textContent = randomQuote;
