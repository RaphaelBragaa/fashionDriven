const padrao = /^https?:\/\/.+\/.+$/
const url = document.querySelector("input");
const botao = document.querySelector(".botao");
const modelo1 = document.querySelector(".modelo .selecionadoOP")
const modelo2 = document.querySelector(".gola .selecionadoOP")
const modelo3 = document.querySelector(".tecido .selecionadoOP")
let modelo;
let gola;
let tecido;
let nome;


function Nome(){
    nome = prompt("Qual seu nome?")
}
Nome()

function SelecionarModelo (elemento){
    
    if (modelo1 !== null) {
        modelo1.classList.toggle("selecionadoOP");
      }else{
         elemento.classList.add("selecionadoOP"); 
         modelo = 1
      } 
      
}

function SelecionarGola (elemento){
    
    if (modelo2 !== null) {
        modelo2.classList.toggle("selecionadoOP");
      } else{
         elemento.classList.add("selecionadoOP");
         gola = 1 
      }
    
}

function SelecionarTecido (elemento){
    
    if (modelo3 !== null) {
        modelo3.classList.toggle("selecionadoOP");
      } else{
         elemento.classList.add("selecionadoOP");
         tecido = 1 
      }

}

function ValidarURL(){
    if(padrao.test(url.value) == true){
        return true
    } else {
        url.classList.add("selecionadoRED")
    }
    
}

function AtivarBotao(){
    if (modelo == 1 && gola == 1 && tecido == 1 && ValidarURL() == true) {
       botao.classList.remove("inativo")
       botao.classList.add("selecionadoBOT")
       alert(`Obrigado ${nome}, sua compra foi confirmada !`)
    } else {
        alert("Não deu certo")
    }
     

     
}