function renderizar(){

    //div para calculadora
    const divCalculadora = document.createElement("div");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto")
    document.body.appendChild(divCalculadora);
    
    //div pantalla calculadora
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divpantalla");
    divPantalla.setAttribute("class", "form-control");
    divCalculadora.appendChild(divPantalla)

    //Pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-rigth");
    divPantalla.appendChild(pantalla);


    //div para botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);
}

renderizar();