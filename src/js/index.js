import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

(function() {
    //   const metronome = document.getElementsByClassName('metronome');
    //   let tempo;
      
    //   function getTempo(){
    //     tempo = prompt('Enter your tempo');
    //   }
      
    //   function playMetronome(setTempo) {
    //     console.log('Your tempo is ' + setTempo)
    //   }
      
    //   metronome[0].addEventListener('click', function() {
    //   const span = this.childNodes[1];
        
    //   if (span.classList.contains('metro-on')) {
    //       span.classList.remove('metro-on');
    //       } else {
    //       span.classList.add('metro-on');
    //       getTempo();
    //   } 
    //   playMetronome(tempo);  
    //   });
      
      window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        console.log(e.keyCode);
        console.log(audio);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        console.log(key);
        key.classList.add('playing');
      });
      
      function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
      }
      
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    })();