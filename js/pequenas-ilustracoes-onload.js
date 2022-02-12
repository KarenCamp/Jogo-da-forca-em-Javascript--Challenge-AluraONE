/* INICIANDO O DESENVOLVIMENTO DENTRO DO CANVAS */
var blocoCanvas = document.querySelector("canvas");
var lapis = blocoCanvas.getContext('2d');
var x1mt;
var y;
var x2lt;
var x;
var raio;

function baseDaForca() {
    lapis.beginPath();
    lapis.strokeStyle = 'black';
    lapis.lineWidth = 2;
    lapis.moveTo(43, 305);
    lapis.lineTo(43, 30);
    lapis.lineTo(150, 30);
    lapis.lineTo(150, 60);
    lapis.stroke(); 
    }

function ilustracaoCaderno() {
    x1mt = 1;
    y = 30;
    x2lt = 375
    for (var c = 1; c <= 21; c++) {
        lapis.beginPath();
        lapis.strokeStyle = 'rgb(7, 153, 129)';
        lapis.lineWidth = 0.8;
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.stroke();
        y = y + 25;
    }
    x = 10;
    y = 10;
    raio = 7;
    for (var c = 1; c <= 15; c++) {
        lapis.beginPath();
        lapis.arc(x, y, raio, 0, 2 * Math.PI);
        lapis.fillStyle = 'lightgray';
        lapis.shadowBlur = 0;
        lapis.shadowOffsetX = -2;
        lapis.shadowOffsetY = 1;
        lapis.shadowColor = 'black';
        lapis.fill();
        y = y + 45;        
    }
}


        
        

