const padrao = /^https?:\/\/.+\/.+$/
const url = document.querySelector("input");
const botao = document.querySelector(".botao");
let modelos;
let gola;
let tecido;
let nome = ""
let link;
let modeloCamiseta;
let modeloGola;
let modeloTecido;

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
          modeloCamiseta = document.querySelector(".selecionadoOP #tipo").innerHTML
         modelos = 1
         MostrarBotao()
}

function SelecionarGola (elemento){
    const modelo = document.querySelector(".gola .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         modeloGola = document.querySelector(".selecionadoOP #tipo").innerHTML
         gola = 1 
      
         MostrarBotao()
}

function SelecionarTecido (elemento){
    const modelo = document.querySelector(".tecido .selecionadoOP")
    if (modelo !== null) {
        modelo.classList.toggle("selecionadoOP");
      } 

         elemento.classList.add("selecionadoOP");
         modeloTecido = document.querySelector(".selecionadoOP #tipo").innerHTML
         tecido = 1 
         MostrarBotao()
}
//Funções de Selecionar as opções

//FUNÇAO DE VALIDAÇÃO DA URL UTLIZANDO O REGEX 
function ValidarURL(){
    if(padrao.test(url.value) == true){
        return true 
        
    } 

MostrarBotao()
}
//FUNÇAO DE VALIDAÇÃO DA URL UTLIZANDO O REGEX 

//FUNÇAO QUE ATIVA O BOTÃO SEM PRECISAR DO ONCLICK COM CHECAGEM EM INTERVALOS DE 1s
function MostrarBotao(){
    if (padrao.test(url.value) == true && modelos == 1 && gola == 1 && tecido == 1 ) {
        botao.classList.remove("inativo")
        botao.classList.add("selecionadoBOT")
        return true
     } 
    
}

setInterval (MostrarBotao, 1000)
//FUNÇAO QUE ATIVA O BOTÃO SEM PRECISAR DO ONCLICK COM CHECAGEM EM INTERVALOS DE 1s


function AtivarBotao(){


    if (modelos == 1 && gola == 1 && tecido == 1 && ValidarURL() == true) {
        link = url.value
       alert(`Obrigado ${nome}, sua compra foi confirmada !`)
       EnvioEncomenda()
    } else {
        alert("Não deu certo")
    }

}


function BuscarDados(){
const promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
promessa.then(RenderizarRoupas)
promessa.catch(tratarErro)
}

function RenderizarRoupas (resposta){
   const CamisasOnline = document.querySelector(".vitrine");
   CamisasOnline.innerHTML = "";
   console.log(resposta.data)
   for (let i = 0; i < resposta.data.length; i++){
    CamisasOnline.innerHTML += `<div onclick="EscolherUltimas()" class="expo"><img class="roupas"src="${resposta.data[i].image}"><h4><strong>Criador:</strong> <span>${resposta.data[i].owner}</span></h4></div>`
    
   }
}

function EnvioEncomenda() {
    const request = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', {
        model: modeloCamiseta,
        neck: modeloGola,
        material: modeloTecido,
        image: link,
        owner: `${nome}`,
        author: `${nome}`
    });
    request.then(alert('Encomenda feita com sucesso.'));
    request.catch(alert('Ops, não conseguimos processar sua encomenda.'));
}

BuscarDados()

function tratarErro() {}

function EscolherUltimas(){
    confirm("Confirma esse pedido?")
}


