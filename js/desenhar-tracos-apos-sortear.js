function desenharTracosAposSortear() {
    lapis.clearRect(0,0,375,525);
    ilustracaoCaderno();
    baseDaForca();
    sorteia();
    
    var cont;

    x1mt = 50;
    x2lt = 80;
    y = 305;
    cont = 0;
    while (cont <= selecionado.length-1 && cont <= 6) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
       }
    }

    x1mt = 50;
    x2lt = 80;
    y = 355;
    cont = 7;
    while (cont <= selecionado.length-1 && cont <= 13) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
       }
    }

    x1mt = 50;
    x2lt = 80;
    y = 405;
    cont = 14;
    while (cont <= selecionado.length-1 && cont <= 20) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 455;
    cont = 21;
    while (cont <= selecionado.length-1 && cont <= 27) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 505;
    cont = 28;
    while (cont <= selecionado.length-1 && cont <= 34) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }
}