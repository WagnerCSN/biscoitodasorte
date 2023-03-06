//array com os bilhetes
let listaBilhetes= [
    'Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo',
    'O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos',
    'Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução',
    'Problemas não são barreiras, mas chances de ímpares de superação e desenvolvimento'
];

//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnChange = document.querySelector("#btnChange")
let numberChosenComputer=0
let index=0
let itemTotal= listaBilhetes.length

//eventos
btnOpen.addEventListener('click', handleTryClick)
btnChange.addEventListener('click', toggleScreen)
document.addEventListener('keypress', PressEnter)

//funções
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function chosenComputer(numberChosenComputer){
    numberChosenComputer = Math.round(Math.random()*4);
    return numberChosenComputer
}

function handleTryClick(event){
    event.preventDefault(); //cancela a ação de recarregar o formulário(a página)
    chosenComputer(numberChosenComputer)
    for(b=0; b<itemTotal;b++){
       
       if(numberChosenComputer==b){

        toggleScreen()

        if(index == itemTotal){
            index=0
        }
        screen2.querySelector("#frase").innerText = listaBilhetes[index];
        }
        console.log(index)
    }
    chosenComputer(numberChosenComputer) 
     index++ 
}

function PressEnter(e){
    if(e.which == 13){
       if (screen1.classList.value == "screen1 hide"){
            toggleScreen()
        }else{
            handleTryClick(e)
        }
    }
}





