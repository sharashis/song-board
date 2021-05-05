const sounds = ['tumjoaaye', 'terimeri', 'dinchadeya', 'mastmast', 'aankhon']

sounds.forEach(sound => {

    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play()
    })


    document.getElementById('button').appendChild(btn);

})

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}