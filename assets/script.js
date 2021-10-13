// Array for sounds
const sounds = ['applause','boo','gasp','tada','victory','wrong'];

// Looping through Array
sounds.forEach(sound => {
    // Button variable
    const btn = document.createElement('button');
    // Class 
    btn.classList.add('btn');

    btn.innerText = sound;

    //Event Listeners
     btn.addEventListener('click', () => {
         // Runs Function stopsSongs
         stopSongs()

         document.getElementById(sound).play()
     })

    document.getElementById('buttons').appendChild(btn)
})

// Prevents Sounds from playing over each other
function stopSongs(params) {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}