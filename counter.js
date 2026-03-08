let initialValue = 0 

let valueAdder = document.getElementById("counter")
function AddOne(){
    initialValue += 1 
    valueAdder.textContent = initialValue
}

let valueSubtracted = document.getElementById("counter")
function minusOne(){
    initialValue -= 1
    valueSubtracted.textContent = initialValue
}

let saveEl = document.getElementById("save-el")
function save(){
    let newNum = initialValue + " , "
    saveEl.textContent += newNum
    document.getElementById("counter").innerText = 0
    initialValue = 0

    
}
