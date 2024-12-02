var down = [5];

window.addEventListener('keydown', function(e){
    if(down[e.keyCode]) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    down[e.keyCode]=true
});

window.addEventListener('keyup', function(e){
    down[e.keyCode]=false;
});
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// document.addEventListener('DOMContentLoaded', () => { // in case you wanna put the scrip in the /head
//     const keys = document.querySelectorAll('.key');
//     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// });

