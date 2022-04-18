const button = document.querySelector("button")
let n = 0

button.addEventListener("click", changeColor)

function changeColor(){
    const body =  document.querySelector("body")
    const nav = document.querySelector("nav")
    if (n == 0){
        body.style.backgroundColor = "#566b86"    // dark mode
        nav.style.backgroundColor = "#344a63"
        n += 1
    }

    else{
        body.style.backgroundColor = "#d0ddf2"   // light mode
        nav.style.backgroundColor = "#8493cc"
        n -= 1
    }
}