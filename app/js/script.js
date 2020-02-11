/*
function hassim() {
    var new_name = document.getElementById('novo_nome').value;

    if (new_name != "") {
        document.getElementById('nome').innerHTML = new_name;

    } else {
        alert("O campo de texto não pode estar vazio");
    }
}
*/

var numeros = [];

function valor_botao(e) {


    if (numeros.length > 0) {
        if(e.value != "+" &&  "-" &&  "/" &&  "*"){
            numeros[numeros.length] = e.value;}
       
    } else {
        numeros[0] = e.value;

    }

    var x = valida_operador();
}

function valida_operador(e) {

    
    var posicao1 = parseInt(numeros[0])
    var posicao2 = parseInt(numeros[1])
    alert(posicao1 + posicao2)
}
function printar_na_tela(){
    debugger;
    var tela = numeros;
    
    document.getElementById('printa_na_tela').innerHTML = tela;
    
    
    
}

    