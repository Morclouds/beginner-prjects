const happyFace = document.querySelector('.happy')
const sadFace = document.querySelector('.sad')


// add event listener
happyFace.addEventListener('click',() => {
    if (sadFace.classList.conatains('sad')){
        sadFace.classList.add('active')
    }
}
)