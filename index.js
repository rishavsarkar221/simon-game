const btns = document.querySelectorAll(".btn")
const array = [0, 1, 2, 3]
const idk = []

let current
let started = false

const game = () => {
    let randomNumber = Math.floor(Math.random() * 4)

    console.log(randomNumber)

    setTimeout(() => {
        btns[randomNumber].classList.add("selectedClass")
        setTimeout(() => btns[randomNumber].classList.remove("selectedClass"), 500)
        current = randomNumber
        started = true
        idk.push(current)
    }, 1000);

}

game()

let points = 0
let i = 0

btns.forEach((element, index) => {
    element.addEventListener("click", function() {
        if(started) {
            element.classList.add("clicked")

            setTimeout(() => {
                element.classList.remove("clicked")
            }, 250)
            
            if(index == idk[i]) {
                if(i == idk.length-1) {
                    game()
                    i = 0
                    points++
                    document.querySelector(".counter").textContent = `Points: ${points}`
                }
                else {
                    i++
                }
            }
            else {
                started = false
                alert("Score: " + points)
            }
        }
    })
})
