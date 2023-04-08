
let botones = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"];

function renderizar(){

    //div para calculadora
    const divCalculadora = document.createElement("div");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center ");
    divCalculadora.setAttribute("style", " width:20% ; margin:8% auto")
    document.body.appendChild(divCalculadora);
    
    //div pantalla calculadora
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divpantalla");
    divPantalla.setAttribute("class", "form-control ");
    divCalculadora.appendChild(divPantalla)

    //Pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-rigth bg-info");
    divPantalla.appendChild(pantalla);


    //div para botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    for (let i = 0; i< botones.length; i++){
        // crear filas
        if(i%4 == 0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }
        const boton = document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);
        boton.setAttribute("class", "btn btn-warning col-3 border white")
        boton.innerHTML= botones[i];

        //agregar el listenner

        boton.addEventListener("click", function(){
            procesarEvento(boton);
        })
        divBotones.appendChild(boton);
    }

    const botonc = document.createElement("button");
    botonc.innerHTML = "C"
    botonc.setAttribute("class", " btn btn-warning col-3 border white")
    divCalculadora.appendChild(botonc)

    botonc.addEventListener("click", function(){
        borrar();
    })

}

function procesarEvento(boton){
    let miPantalla = document.getElementById("pantalla");
    if (miPantalla.value == 0){
        miPantalla.value = "";
    }
    if(boton.innerHTML != "="){
        miPantalla.value = miPantalla.value + boton.innerHTML;
    }else{
        try{
            let resultado = math.evaluate(miPantalla.value);
            miPantalla.value = resultado;
        }catch(err){
            miPantalla.value = "Math error";    
        }
    }
}

function borrar(){
    let miPantalla = document.getElementById("pantalla");
    miPantalla.value = "0";
}
renderizar();