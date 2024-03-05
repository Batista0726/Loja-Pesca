function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome)
}

function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("select-div");
    if (nome && nome.trim() !== "") {
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "nome";
    } else {
        document.getElementById("error").style.display = "flex";
    }
}

function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "none";
}

function calcularTotal(){
    var selectVara = document.getElementById("selectVara");
    var selectIsca = document.getElementById("selectIsca");
    var selectRede = document.getElementById("selectRede");
    var selectBoia = document.getElementById("selectBoia");
    var selectAnzol = document.getElementById("selectAnzol");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var Vara = 0;
    var Isca = 0;
    var Rede = 0;
    var Boia = 0;
    var Anzol = 0;
    
    switch (selectVara.value) {
        case "Vara1":
            total =  total + 100.00;
            Vara = 100.00;
            break;
            case "Vara2":
            total =  total + 160.00;
            Vara = 160.00;
            break;
            case "Vara3":
            total =  total + 70.00;
            Vara = 70.00;
            break;
            case "Vara4":
            total =  total + 20.00;
            Vara = 20.00;
            break;
            case "Vara5":
            total =  total + 200.00;
            Vara = 200.00;
            break;

    }

    switch (selectIsca.value) {
        case "Isca1":
            total =  total + 20.00;
            Isca = 20.00;
            break;
            case "Isca2":
            total =  total + 8.90;
            Isca = 8.90;
            break;
            case "Isca3":
            total =  total + 6.90;
            Isca = 6.90;
            break;
            case "Isca4":
            total =  total + 8.90;
            Isca = 8.90;
            break;
            case "Isca5":
            total =  total + 6.90;
            Isca = 6.90;
            break;

    }

    switch (selectRede.value) {
        case "Rede1":
            total =  total + 19.90;
            Rede = 19.90;
            break;
        case "Rede2":
            total =  total + 7.90;
            Rede = 7.90;
            break;
        case "Rede3":
            total =  total + 15.90;
            Rede = 15.90;
        break;
        case "Rede4":
            total =  total + 7.90;
            Rede = 7.90;
            break;
        case "Rede5":
            total =  total + 15.90;
            Rede = 15.90;
        break;

    }
    switch (selectBoia.value) {
        case "Boia1":
            total =  total + 19.90;
            Boia = 19.90;
            break;
        case "Boia2":
            total =  total + 7.90;
            Boia = 7.90;
            break;
        case "Boia3":
            total =  total + 15.90;
            Boia = 15.90;
        break;
        case "Boia4":
            total =  total + 7.90;
            Boia = 7.90;
            break;
        case "Boia5":
            total =  total + 15.90;
            Boia = 15.90;
        break;

    }
    switch (selectAnzol.value) {
        case "Anzol1":
            total =  total + 19.90;
            Anzol = 19.90;
            break;
        case "Anzol2":
            total =  total + 7.90;
            Anzol = 7.90;
            break;
        case "Anzol3":
            total =  total + 15.90;
            Anzol = 15.90;
        break;
        case "Anzol4":
            total =  total + 7.90;
            Anzol = 7.90;
            break;
        case "Anzol5":
            total =  total + 15.90;
            Anzol = 15.90;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "block" 
    document.getElementById("RemedioAI-pronto").textContent = selectAI.value + " R$ " + AI.toFixed(2); 
    document.getElementById("RemedioC-pronto").textContent = selectC.value + " R$ " + C.toFixed(2); 
    document.getElementById("RemedioAA-pronto").textContent = selectAA.value + " R$ " + AA.toFixed(2);
    document.getElementById("RemedioD-pronto").textContent = selectD.value + " R$ " + D.toFixed(2); 
    document.getElementById("RemedioI-pronto").textContent = selectI.value + " R$ " + I.toFixed(2);  
    resultadoSpan.textContent = "R$" + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("select-cardiologico").value = "Selecione seu medicamento";
    document.getElementById("select-anti-alergico").value = "Selecione seu medicamento";
    document.getElementById("select-anti-inflamatorio").value = "Selecione seu medicamento";
    document.getElementById("select-Dores").value = "Selecione seu medicamento";
    document.getElementById("select-Inchaco").value = "Selecione seu medicamento";
}