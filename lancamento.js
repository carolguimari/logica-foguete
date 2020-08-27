const button = document.querySelector("button");
const p = document.querySelector("p");
const img = document.querySelector("img");


let contagem = 10
let lancamentoAutorizado = false
let id;

const lancarFoguete = () => {
    img.setAttribute("src", "f48.gif")
    button.innerText = "Foguete lançado!" 
}


const contadora = () => {
    p.innerHTML = contagem
        contagem-- 
        button.innerText = "Abortar a missão"   
}


button.addEventListener("click", () => {
    if (!lancamentoAutorizado) {
        lancamentoAutorizado = true      
        id = setInterval(contadora, 1000);
        setTimeout(() => {
        clearInterval(id)
        lancarFoguete();
        }, 11000)   
    
     } else {
        !lancamentoAutorizado
        clearInterval(id);
        button.innerText = "Missão abortada!"
     }

 
 })