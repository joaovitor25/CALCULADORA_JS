/*VARIAVEIS GLOBAIS*/
var numeros = [];
var operadores = []
alert(operadores)





/*FUNCOES*/
function valor_botao(e) {
        
       var x = valida_operador(e.value);
       //adcionei esta variavel da função printa na tela
    
    //para saber se algum numero ja foi clicado
    if (numeros.length > 0) {
       
        //Separação dos numeros e Operações
        
        //CASO ALGUMA OPERACAO FOR DIGITADA VC ESTA IGNORANDO
        if(e.value != "+" && e.value !=  "-" && e.value != "/" && e.value != "*"){
            numeros[numeros.length] = e.value;
            
            var y = printar_na_tela();
        } else{
            operadores[operadores.length] = e.value;
            }
        
        /*
        Voce poderia colocar o else aqui e guaradar as operações em outra variavel (nao precisava ser array)
        
        aí consegue pegar os numeros digitados e colocar numa variavel e operações em outra;
        
        
        OBS. Não precisa separar, apenas está guardando em locais diferentes se separar eles 
        */
               
    } else {
        numeros[0] = e.value;
        var y = printar_na_tela();
    }
    document.write(verifica_numeros());

    //Recomendo sempre criar um nome valido para variaveis ao inves de a,b,c x, y,z....
    /*
    Se voce nao passa o parametro dentro dos parenteses a funcao nao recebe o valor que vc esta enviando
    valida_operador( AQUI VC DEVE PASSAR QUAL A VARIAVEL OU VALOR QUE QUER ENVIAR PRA DENTRO DA FUNCAO  )
    
    */
    //var x = valida_operador(e.value);//A chamada da função está correta desde que tenha return;
}
function verifica_numeros(){
    debugger;
    var numeroUm = null;
    while(numeros[0] != "+" && numeros[0] !=  "-" && numeros[0] != "/" && numeros[0] != "*"){
        if(numeroUm == null){
            numeroUm = numeros[0];
            numeros[0].shift();
           } else{
                numeroUm = numeros[0] + numero;
                numeros[0].shift();
                
           }
    alert(numeroUm);
    } else{
        opera = operadores[0];
        numeros[0].shift();
        while(numeros.length != 0){
            while(numeros[0] != "+" && numeros[0] !=  "-" && numeros[0] != "/" && numeros[0] != "*"){
                if(numeroUm == null){
                    numeroUm = numeros[0];
                    numeros[0].shift();
                } else{
                    numeroUm = numeros[0] + numero;
                    numeros[0].shift();
                
                }
        }
    }
    
        
}



/*
Essa letra E que esta entre parenteses é o parametro que a função "function valida_operador(E) {"  está recebendo

*/

function valida_operador(valor) {
    //voce nao usou o: e 
    //entao ele ficou inutil aí, esse cara é o parametro que vem dos botoes
    
    
/* Comentei o bloco por ele ser inutil, mas voce pode corrigir    
    var posicao1 = parseInt(numeros[0])
    var posicao2 = parseInt(numeros[1])
    alert(posicao1 + posicao2)
    
*/  
    
    var operadores = []//recebe nuúmeros
    var y;
    operadores.push(valor);//adcineis para adicionar os números na lista de operadores
    alert(operadores)
    
    
    
    
    
    
    
    
    
    
    
    
}


//essa funcao deveria receber algo nos parametros pra pode imprimir
//function printar_na_tela("AQUI é o parametro")

function printar_na_tela(){
    debugger;
    var tela = numeros;//imprimir os numeros nao faz sentido
    
    //document.getElementById('printa_na_tela').innerHTML = tela;// faz sentido comentei pra deixar um exmeplo fixo
    
    document.getElementById('novo_nome').value = tela;
    document.getElementById('tela2').innerHTML = tela;//adicionei para mostrar na div os numeros mas etsa em teste

    
    
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

