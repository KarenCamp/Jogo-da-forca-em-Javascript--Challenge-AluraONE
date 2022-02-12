/* FUNÇÃO PARA FINALMENTE COMEÇAR A JOGAR A FORCA */
var guardaLetraYes = [];
var letrasNone = document.querySelector(".first-div");
var resultado = document.querySelector(".result");
var motivation = document.querySelector(".motivation");
var alfabeto = [];
for (let i = 65; i <= 90; i++) {
    alfabeto.push(i) 
};
var errou = [];
var varDeVitoria = false;
var tentativas = 0;
var bttnRedefinir = document.querySelector(".redefine");
var bttnNewGame = document.querySelector(".bttn-new-game");


function lerLetrasKeyboard (ind, letra, keyCodeEquivalente) {
    x1mt = 50;
    x2lt = 80;
    for (cont = 0; cont <= selecionado.length -1 && cont <= 6; cont ++) {
    if (keyCodeEquivalente == alfabeto[ind] && selecionado[cont].includes(letra)) {
        lapis.strokeStyle = 'black';
        lapis.lineWidth = 2;
        lapis.font = '40px serif';
        lapis.strokeText(selecionado[cont], x1mt, 295);
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        guardaLetraYes.push(selecionado[cont]);
    }
    if (!selecionado[cont].includes(letra)) {
        x1mt = x1mt + 45;
        x2lt = x2lt + 45; }
    } 

    x1mt = 50;
    x2lt = 80;
    for (cont = 7; cont <= selecionado.length -1 && cont <= 13; cont ++) {
    if (keyCodeEquivalente == alfabeto[ind] && selecionado[cont].includes(letra)) {
        lapis.strokeStyle = 'black';
        lapis.lineWidth = 2;
        lapis.font = '40px serif';
        lapis.strokeText(selecionado[cont], x1mt, 345);
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        guardaLetraYes.push(selecionado[cont])
    }
    if (!selecionado[cont].includes(letra)) {
        x1mt = x1mt + 45;
        x2lt = x2lt + 45; }
    } 

    x1mt = 50;
    x2lt = 80;
    for (cont = 14; cont <= selecionado.length -1 && cont <= 20; cont ++) {
    if (keyCodeEquivalente == alfabeto[ind] && selecionado[cont].includes(letra)) {
        lapis.strokeStyle = 'black';
        lapis.lineWidth = 2;
        lapis.font = '40px serif';
        lapis.strokeText(selecionado[cont], x1mt, 395);
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        guardaLetraYes.push(selecionado[cont])
    }
    if (!selecionado[cont].includes(letra)) {
        x1mt = x1mt + 45;
        x2lt = x2lt + 45; }
    } 

    x1mt = 50;
    x2lt = 80;
    for (cont = 21; cont <= selecionado.length -1 && cont <= 27; cont ++) {
    if (keyCodeEquivalente == alfabeto[ind] && selecionado[cont].includes(letra)) {
        lapis.strokeStyle = 'black';
        lapis.lineWidth = 2;
        lapis.font = '40px serif';
        lapis.strokeText(selecionado[cont], x1mt, 445);
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        guardaLetraYes.push(selecionado[cont])
    }
    if (!selecionado[cont].includes(letra)) {
        x1mt = x1mt + 45;
        x2lt = x2lt + 45; }
    } 
    
    x1mt = 50;
    x2lt = 80;
    for (cont = 28; cont <= selecionado.length -1 && cont <= 34; cont ++) {
    if (keyCodeEquivalente == alfabeto[ind] && selecionado[cont].includes(letra)) {
        lapis.strokeStyle = 'black';
        lapis.lineWidth = 2;
        lapis.font = '40px serif';
        lapis.strokeText(selecionado[cont], x1mt, 495);
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        guardaLetraYes.push(selecionado[cont]);
    }
    if (!selecionado[cont].includes(letra)) {
        x1mt = x1mt + 45;
        x2lt = x2lt + 45; }
    } 
    if (keyCodeEquivalente == alfabeto[ind] && guardaLetraYes.includes(letra)) {
        alfabeto[ind] = [];
    }
    
    if (selecionado.indexOf(letra) == -1 && errou.indexOf(letra) == -1 && varDeVitoria == false) {
    errou.push(letra);
    letrasNone.innerHTML += '&nbsp' + letra + '&nbsp';
    tentativas++;
    
    switch (tentativas) {

        case 1:
            desenhaCabeca();
            break;

        case 2:
            desenhaCorpo();
            break;

        case 3:
            desenhaBracos(150,129,120,100);
            break;
        
        case 4:
            desenhaBracos(150,129,180,100);
            break;

        case 5:
            desenhaPes(120,190,150,170);
            break;

        case 6:
            desenhaPes(180,190,150,170);
            break;

        case 7:
            enforcado();
            resultado.innerHTML = "&nbsp Você perdeu! &nbsp";
            motivation.innerHTML = "&nbsp Não foi desta vez, tente novamente! &nbsp";
            btns.style.display = "none";
            bttnNewGame.style.display = "none";
            break;
    }
  }
if (guardaLetraYes.length -1 == selecionado.length - 1) {
    resultado.innerHTML = "&nbsp Você venceu! &nbsp";
    motivation.innerHTML = "&nbsp Parabéns!! Volte sempre por aqui para jogar! &nbsp";
    btns.style.display = "none";
    bttnNewGame.style.display = "none";
    varDeVitoria = true;
  }   
}

bttnRedefinir.addEventListener ("click", function () {
    history.go(0);
});

bttnNewGame.addEventListener ("click", function (){
    bttnNewGame.style.display = "none";
    bttnRedefinir.style.display = "block";
    txtInput.style.display = "none";
    btnAdd.style.display = "none";
});

function desenhaCabeca() {
        lapis.beginPath();
        lapis.arc(150, 76, 17, 0, 2 * Math.PI);
        lapis.strokeStyle = 'black';
        lapis.stroke();      
}

function desenhaCorpo() {
    lapis.beginPath();
    lapis.strokeStyle = 'black';
    lapis.lineWidth = 2;
    lapis.moveTo(150,165); 
    lapis.lineTo(150,94); 
    lapis.stroke();  
}

function desenhaBracos(x1mt,y,x2lt) {
    lapis.beginPath();
    lapis.strokeStyle = 'black';
    lapis.lineWidth = 2;
    lapis.moveTo(x1mt,y); 
    lapis.lineTo(x2lt,y-25); 
    lapis.stroke();  
}

function desenhaPes(x1mt,y,x2lt) {
    lapis.beginPath();
    lapis.strokeStyle = 'black';
    lapis.lineWidth = 2;
    lapis.moveTo(x1mt,y);
    lapis.lineTo(x2lt,y-25); 
    lapis.stroke();  
}

function enforcado() {
    lapis.beginPath();
    lapis.strokeStyle = 'red';
    lapis.lineWidth = 3;
    lapis.moveTo(110,97); 
    lapis.lineTo(190,97); 
    lapis.stroke();  
}