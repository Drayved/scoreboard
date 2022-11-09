


let homeNum = document.getElementById("home-num")
let guestNum = document.getElementById("guest-num")
let home = 0
let guest = 0



function add1Home(){
    home +=  1
    homeNum.textContent = home
}

function add2Home(){
    home += 2
    homeNum.textContent = home
}

function add3Home(){
    home += 3
    homeNum.textContent = home
}

function add1Guest(){
    guest++
    guestNum.textContent = guest
}

function add2Guest(){
    guest += 2
    guestNum.textContent = guest
}

function add3Guest(){
    guest += 3
    guestNum.textContent = guest
}
