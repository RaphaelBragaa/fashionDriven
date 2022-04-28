const padrao = /^https?:\/\/.+\/.+$/


function SelecionarModelo (elemento){
    const modelo = document.querySelector(".modelo .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      }
    
      elemento.classList.add("selecionadoOP");
      return true
}

function SelecionarGola (elemento){
    const modelo = document.querySelector(".gola .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      }
    
      elemento.classList.add("selecionadoOP");
      return true
}

function SelecionarTecido (elemento){
    const modelo = document.querySelector(".tecido .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      }
    
      elemento.classList.add("selecionadoOP");
      return true
}

function ValidarURL(){
    let url = document.querySelector("input")
    if(padrao.test(url.value) == true){
        return true
    } else {
        url.classList.add(".selecionadoRED")
    }
    return true
}

function AtivarBotao(elemento){
    
         
        elemento.classList.add(".selecionadoBOT")  
    
    
}