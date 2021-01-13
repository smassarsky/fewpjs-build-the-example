// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const HEART_SWITCHER = {
  [EMPTY_HEART]: FULL_HEART,
  [FULL_HEART]: EMPTY_HEART
}

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal")
const errorModalMessage = document.querySelector("#modal-message")
const likeGlyphs = document.querySelectorAll(".like-glyph")

for (glyph of likeGlyphs) {
  glyph.addEventListener("click", e => {
    
    mimicServerCall()
      .then(() => {
        if (e.target.classList.contains("activated-heart")) {
          e.target.innerText = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        } else {
          e.target.innerText = FULL_HEART
          e.target.classList.add("activated-heart")
        }
      })
      .catch(resp => {
        errorModal.classList.remove("hidden")
        errorModalMessage.innerText = resp
        setTimeout(() => errorModal.classList.add("hidden"), 5000)
      })
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
