const padrao = /^https?:\/\/.+\/.+$/
const url = document.querySelector("input");
const botao = document.querySelector(".botao");
let modelos;
let gola;
let tecido;
let nome;
let link;


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
      
         MostrarBotao()
}

function SelecionarGola (elemento){
    const modelo = document.querySelector(".gola .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         gola = 1 
      
         MostrarBotao()
}

function SelecionarTecido (elemento){
    const modelo = document.querySelector(".tecido .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         tecido = 1 
         MostrarBotao()
}
//Funções de Selecionar as opções

function ValidarURL(){
    if(padrao.test(url.value) == true){
        url.classList.remove("selecionadoRED")
        return true 
        
    } 

MostrarBotao()
}

function MostrarBotao(){
    if (padrao.test(url.value) == true && modelos == 1 && gola == 1 && tecido == 1 ) {
        botao.classList.remove("inativo")
        botao.classList.add("selecionadoBOT")
        return true
     } else {
         console.log("nada")
        
     }
    
}

setInterval (MostrarBotao, 1000)



function AtivarBotao(){
    if (modelos == 1 && gola == 1 && tecido == 1 && ValidarURL() == true) {
        botao.classList.remove("inativo")
        botao.classList.add("selecionadoBOT")
       alert(`Obrigado ${nome}, sua compra foi confirmada !`)
    } else {
        alert("Não deu certo")
    }
}



