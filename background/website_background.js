function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let btnSend = document.getElementById('osman');
let message = document.getElementById('duman');

btnSend.addEventListener('click', () => {
    btnSend.innerText = 'Responding...';
    setTimeout(() => {
        message.innerText = "Lern Programin skillz pls :)";
    }, 3000);
});

let songLyrics = [
    "I didn't want to anymore, oh, oh, oh",
    "And we will never be alone again",
    "'Cause it doesn't happen every day",
    "Kinda counted on you being a friend",
    "Can I give it up or give it away?",
    "Now I thought about what I wanna say",
    "But I never really know where to go",
    "So I chained myself to a friend",
    "'Cause I know it unlocks like a door",
    "And we will never be alone again",
    "'Cause it doesn't happen every day",
    "Kinda counted on you being a friend",
    "Can I give it up or give it away?",
    "Now I thought about what I wanna say",
    "But I never really know where to go",
    "So I chained myself to a friend",
    "'Cause I know it unlocks like a",
    "I don't understand, don't get upset",
    "I'm not with you",
    "We're swimming around",
    "It's all I do when I'm with you",
    "And we will never be alone again",
    "'Cause it doesn't happen every day",
    "Kinda counted on you being a friend",
    "Can I give it up or give it away?",
    "Now I thought about what I wanna say",
    "But I never really know where to go",
    "So I chained myself to a friend",
    "'Cause I know it unlocks like a door",
    "And we will never be alone again",
    "'Cause it doesn't happen every day",
    "Kinda counted on you being a friendé",
    "Can I give it up or give it away?",
    "Now I thought about what I wanna say",
    "But I never really know where to go",
    "So I chained myself to a friend",
    "Cause I know it unlocks like a door"
];

let lyricsButton = document.getElementById('demo');
let lyrcisP = document.getElementById('muhittin');
lyricsButton.addEventListener('click', () => {

    let lyric = songLyrics[getRandomInt(songLyrics.length)]
    lyrcisP.innerText = lyric;



})