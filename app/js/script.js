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
    debugger;

    if (numeros.length > 0) {
        numeros[numeros.length] = e.value;
    } else {
        numeros[0] = e.value;

    }

var x = valida_operador();
}

function valida_operador(e){
   
    return "x"
}