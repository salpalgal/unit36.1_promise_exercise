let baseURL = "https://deckofcardsapi.com/api/deck/new/draw/"
let count = 1

$.getJSON(`${baseURL}?count=${count}`).then(response => {
    console.log(`${response["cards"][0]["value"]} of ${response["cards"][0]["suit"].toLowerCase()}`)
})

$.getJSON(`${baseURL}?count=${count}`).then(response => {
    console.log(`${response["cards"][0]["value"]} of ${response["cards"][0]["suit"].toLowerCase()}`)
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${response["deck_id"]}/draw/?count=${count}`)
})
.then(response =>{
    console.log(`${response["cards"][0]["value"]} of ${response["cards"][0]["suit"].toLowerCase()}`)
})

let btn = document.querySelector("#button")
let deck_id = null

$.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/`).then(res => {
    console.log(res)
    deck_id = res["deck_id"]
    
})

let imgArea = document.querySelector("#card-area")
btn.addEventListener("click", function(){
  
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`).then(response =>{
        let img = document.createElement("img")
        img.src = response["cards"][0]["image"]
        imgArea.append(img)
        return `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    })
} )



