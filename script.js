const padrao = /^https?:\/\/.+\/.+$/
const url = document.querySelector("input");
const botao = document.querySelector(".botao");
let modelos;
let gola;
let tecido;
let nome;


function Nome(){
    nome = prompt("Qual seu nome?")
}
Nome()


//Funções de Selecionar as opções
function SelecionarModelo (elemento){
    const modelo = document.querySelector(".modelo .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      }
         elemento.classList.add("selecionadoOP"); 
         modelos = 1
      
      
}

function SelecionarGola (elemento){
    const modelo = document.querySelector(".gola .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         gola = 1 
      
    
}

function SelecionarTecido (elemento){
    const modelo = document.querySelector(".tecido .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         tecido = 1 
}
//Funções de Selecionar as opções

function ValidarURL(){
    if(padrao.test(url.value) == true){
        url.classList.remove("selecionadoRED")
        return true
    } else {
        url.classList.add("selecionadoRED")
    }
    
}

function AtivarBotao(){
    if (modelos == 1 && gola == 1 && tecido == 1 && ValidarURL() == true) {
       botao.classList.remove("inativo")
       botao.classList.add("selecionadoBOT")
       alert(`Obrigado ${nome}, sua compra foi confirmada !`)
    } else {
        alert("Não deu certo")
    }
     

     
}