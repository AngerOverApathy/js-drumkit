document.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`) //find audio element
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`) //find key class and data-key
    if (!audio) return;
    audio.currentTime = 0 //rewind to start
    audio.play()
    key.classList.add('playing') //add css class to key
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))