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
        case "Vara Longa:":
            total =  total + 100.00;
            Vara = 100.00;
            break;
            case "Vara Profissional:":
            total =  total + 160.00;
            Vara = 160.00;
            break;
            case "Vara Infantil:":
            total =  total + 70.00;
            Vara = 70.00;
            break;
            case "Vara de Bambu:":
            total =  total + 20.00;
            Vara = 20.00;
            break;
            case "Vara com Molinete:":
            total =  total + 200.00;
            Vara = 200.00;
            break;

    }

    switch (selectIsca.value) {
        case "Isca Tucunaré:":
            total =  total + 20.00;
            Isca = 20.00;
            break;
            case "Isca Whisky:":
            total =  total + 50.00;
            Isca = 50.00;
            break;
            case "Isca Bola:":
            total =  total + 20.00;
            Isca = 20.00;
            break;
            case "Isca Irmão do bola:":
            total =  total + 20.00;
            Isca = 20.00;
            break;
            case "Isca Sushi:":
            total =  total + 30.00;
            Isca = 30.00;
            break;

    }

    switch (selectRede.value) {
        case "Rede Gato:":
            total =  total + 80.00;
            Rede = 80.00;
            break;
        case "Rede Barriga:":
            total =  total + 50.00;
            Rede = 50.00;
            break;
        case "Rede Enguia:":
            total =  total + 35.00;
            Rede = 35.00;
        break;
        case "Rede Água-Viva:":
            total =  total + 40.00;
            Rede = 40.00;
            break;
        case "Rede Emaranhada:":
            total =  total + 100.00;
            Rede = 100.00;
        break;

    }
    switch (selectBoia.value) {
        case "Boia Maça Verde:":
            total =  total + 3.00;
            Boia = 3.00;
            break;
        case "Boia Coxinha:":
            total =  total + 2.00;
            Boia = 2.00;
            break;
        case "Boia Arpão:":
            total =  total + 6.00;
            Boia = 6.00;
        break;
        case "Boia Butijão:":
            total =  total + 8.00;
            Boia = 8.00;
            break;
        case "Boia Abelha:":
            total =  total + 6.00;
            Boia = 6.00;
        break;

    }
    switch (selectAnzol.value) {
        case "Anzol Bob:":
            total =  total + 5.00;
            Anzol = 5.00;
            break;
        case "Anzol Triplex:":
            total =  total + 7.00;
            Anzol = 7.00;
            break;
        case "Anzol Básico:":
            total =  total + 4.00;
            Anzol = 4.00;
        break;
        case "Anzol Doze Mola:":
            total =  total + 10.00;
            Anzol = 10.00;
            break;
        case "Anzol Barrigudo:":
            total =  total + 8.00;
            Anzol = 8.00;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "flex"; 
    document.getElementById("Vara-pronto").textContent = selectVara.value + " R$ " + Vara.toFixed(2); 
    document.getElementById("Isca-pronto").textContent = selectIsca.value + " R$ " + Isca.toFixed(2); 
    document.getElementById("Rede-pronto").textContent = selectRede.value + " R$ " + Rede.toFixed(2);
    document.getElementById("Boia-pronto").textContent = selectBoia.value + " R$ " + Boia.toFixed(2); 
    document.getElementById("Anzol-pronto").textContent = selectAnzol.value + " R$ " + Anzol.toFixed(2);  
    resultadoSpan.textContent = "R$" + total.toFixed(2);
    
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("select-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectVara").value = "Selecione sua Vara de Pesca";
    document.getElementById("selectIsca").value = "Selecione sua Isca";
    document.getElementById("selectRede").value = "Selecione sua Rede de Pesca";
    document.getElementById("selectBoia").value = "Selecione sua Boia";
    document.getElementById("selectAnzol").value = "Selecione seu Anzol";
}