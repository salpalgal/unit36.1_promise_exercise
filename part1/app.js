let number = 3 
let baseURL = "http://numbersapi.com/"

$.getJSON(`${baseURL}${number}?json`).then(response => {
    console.log(response)
})

let numbers =[3,6,7]
let section = document.querySelector("#section")

$.getJSON(`${baseURL}${numbers}?json`).then(res => {
    console.log(res)
    
    for(let r in res){
        let p = document.createElement("p")
        p.innerText = res[r]
        section.append(p)
    }
})

$.getJSON(`${baseURL}${number}?json`).then(res =>{
    let p = document.createElement("p")
    p.innerText = res["text"]
    section.append(p)
    return $.getJSON(`${baseURL}${number}?json`)
}).then(res =>{
    let p = document.createElement("p")
    p.innerText = res["text"]
    section.append(p)
    return $.getJSON(`${baseURL}${number}?json`)
}).then(res =>{
    let p = document.createElement("p")
    p.innerText = res["text"]
    section.append(p)
    return $.getJSON(`${baseURL}${number}?json`)
}).then(res =>{
    let p = document.createElement("p")
    p.innerText = res["text"]
    section.append(p)
    return $.getJSON(`${baseURL}${number}?json`)
})
