const {join} = require('path');


let home_section = document.getElementById('home');
let choice_btn = document.getElementById('choice-btn');
let add_btn = document.getElementById('add-btn');
let register_btn = document.getElementById('register-button');

choice_btn.addEventListener('click', ()=>{
    let bicec = document.createElement('a');
    let bci = document.createElement('a');
    
    //mise en forme
    bicec.classList.add("btn", "btn-outline-warning");
    bci.classList.add("btn", "btn-outline-warning");

    //attribut
    bicec.setAttribute("href",  "bicec.html")
    bicec.setAttribute("role", "button")
    let text = document.createTextNode("BICEC");
    bicec.appendChild(text);
    
    bci.setAttribute("href",  "bci.html")
    bci.setAttribute("role", "button")
    text = document.createTextNode("BCI");
    bci.appendChild(text);

    console.log(bicec, bci)
    
    home_section.replaceChildren(bicec, bci);
    home_section.classList.add("btn-group-lg");
})