// Array for sounds
const sounds = ['applause','boo','gasp','tada','victory','wrong'];

// Looping through Array
sounds.forEach(sound => {
    // Button variable
    const btn = document.createElement('button');
    // Class 
    btn.classList.add('btn');

    btn.innerText = sound;

    document.getElementById('buttons').appendChild(btn)

})
