/*VARIAVEIS GLOBAIS*/
var numeros = [];






/*FUNCOES*/
function valor_botao(e) {

            
    //para saber se algum numero ja foi clicado
    if (numeros.length > 0) {
       
        //Separação dos numeros e Operações
        
        //CASO ALGUMA OPERACAO FOR DIGITADA VC ESTA IGNORANDO
        if(e.value != "+" &&  "-" &&  "/" &&  "*"){
            numeros[numeros.length] = e.value;
        }
        
        /*
        Voce poderia colocar o else aqui e guaradar as operações em outra variavel (nao precisava ser array)
        
        aí consegue pegar os numeros digitados e colocar numa variavel e operações em outra;
        
        
        OBS. Não precisa separar, apenas está guardando em locais diferentes se separar eles 
        */
               
    } else {
        numeros[0] = e.value;
    }

    //Recomendo sempre criar um nome valido para variaveis ao inves de a,b,c x, y,z....
    /*
    Se voce nao passa o parametro dentro dos parenteses a funcao nao recebe o valor que vc esta enviando
    valida_operador( AQUI VC DEVE PASSAR QUAL A VARIAVEL OU VALOR QUE QUER ENVIAR PRA DENTRO DA FUNCAO  )
    
    */
    var x = valida_operador();//A chamada da função está correta desde que tenha return;
}




/*
Essa letra E que esta entre parenteses é o parametro que a função "function valida_operador(E) {"  está recebendo

*/

function valida_operador(e) {
    //voce nao usou o: e 
    //entao ele ficou inutil aí, esse cara é o parametro que vem dos botoes
    
    
/* Comentei o bloco por ele ser inutil, mas voce pode corrigir    
    var posicao1 = parseInt(numeros[0])
    var posicao2 = parseInt(numeros[1])
    alert(posicao1 + posicao2)

*/
}


//essa funcao deveria receber algo nos parametros pra pode imprimir
//function printar_na_tela("AQUI é o parametro")

function printar_na_tela(){
    debugger;
    var tela = numeros;//imprimir os numeros nao faz sentido
    
    //document.getElementById('printa_na_tela').innerHTML = tela;// faz sentido comentei pra deixar um exmeplo fixo
    document.getElementById('printa_na_tela').innerHTML = 123;
    
    
    
}






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

