const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
let audio = document.getElementById("soundEffect");

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        
        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                    
                    audio.play();
                    
                    launchConfetti();  
                    

                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *")) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});


function launchConfetti() {
    confetti({
        particleCount: 100, 
        spread: 80,
        origin: { y: 0.6 } 
    });
}
