var clicks = 0;

function onClick() {


    var proximaTela2 = document.getElementById('proximo-to-2')
    var proximaTela22 = document.getElementById('proximo-to-2.2')
    var proximaTela3 = document.getElementById('proximo-to-3')
    var proximaTela23 = document.getElementById('proximo-to-2.3')
    var proximaTela4 = document.getElementById('proximo-to-4')
    var proximaTela24 = document.getElementById('proximo-to-2.4')
    var proximaTela5 = document.getElementById('proximo-to-5')
    var proximaTela25 = document.getElementById('proximo-to-2.5')
    var proximaTela6 = document.getElementById('proximo-to-6')
    var proximaTela26 = document.getElementById('proximo-to-2.6')
    var proximaTelaFinal = document.getElementById('proximo-to-finishTrue')
    var proximaTelaFinal2 = document.getElementById('proximo-to-FinishFalse')
    
    var telaDePergunta1 = document.getElementById('first-quest-Js')
    var telaDePergunta2 = document.getElementById('second-quest-Js')
    var telaDePergunta3 = document.getElementById('third-quest-Js')
    var telaDePergunta4 = document.getElementById('fourth-quest-Js')
    var telaDePergunta5 = document.getElementById('fifth-quest-Js')
    var telaDePergunta6 = document.getElementById('sixth-quest-Js')
    var telaDeFinalizacao = document.getElementById('TelaFinal')
    
    var trocaDeTelaMito1 = document.getElementById('mitoButton-1')
    var trocaDeTelaMito2 = document.getElementById('mitoButton-2')
    var trocaDeTelaMito3 = document.getElementById('mitoButton-3')
    var trocaDeTelaMito4 = document.getElementById('mitoButton-4')
    var trocaDeTelaMito5 = document.getElementById('mitoButton-5')
    var trocaDeTelaMito6 = document.getElementById('mitoButton-6')
    
    var trocaDeTelaVerdade1 = document.getElementById('trueButton-1')
    var trocaDeTelaVerdade2 = document.getElementById('trueButton-2')
    var trocaDeTelaVerdade3 = document.getElementById('trueButton-3')
    var trocaDeTelaVerdade4 = document.getElementById('trueButton-4')
    var trocaDeTelaVerdade5 = document.getElementById('trueButton-5')
    var trocaDeTelaVerdade6 = document.getElementById('trueButton-6')
    
    var telaMito1 = document.getElementById('tela-mito-1')
    var telaTrue1 = document.getElementById('tela-verdadeiro-1')
    var telaMito2 = document.getElementById('tela-mito-2')
    var telaTrue2 = document.getElementById('tela-verdadeiro-2')
    var telaMito3 = document.getElementById('tela-mito-3')
    var telaTrue3 = document.getElementById('tela-verdadeiro-3')
    var telaTrue4 = document.getElementById('tela-verdadeiro-4')
    var telaMito4 = document.getElementById('tela-mito-4')
    var telaTrue5 = document.getElementById('tela-verdadeiro-5')
    var telaMito5 = document.getElementById('tela-mito-5')
    var telaTrue6 = document.getElementById('tela-verdadeiro-6')
    var telaMito6 = document.getElementById('tela-mito-6')
    
    trocaDeTelaMito1.onclick = function(){
        telaDePergunta1.style.display = 'none';
        telaMito1.style.display = 'block';
    }
    
    trocaDeTelaVerdade1.onclick = function(){
        telaDePergunta1.style.display = 'none';
        telaTrue1.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    
    proximaTela2.onclick = function(){
        telaTrue1.style.display = 'none';
        telaDePergunta2.style.display = 'block';
    }
    proximaTela22.onclick = function(){
        telaMito1.style.display = 'none';
        telaDePergunta2.style.display = 'block';
    }
    trocaDeTelaMito2.onclick = function(){
        telaDePergunta2.style.display = 'none';
        telaMito2.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    
    trocaDeTelaVerdade2.onclick = function(){
        telaDePergunta2.style.display = 'none';
        telaTrue2.style.display = 'block';
    }
    proximaTela3.onclick = function(){
        telaTrue2.style.display = 'none';
        telaDePergunta3.style.display = 'block';
    }
    proximaTela23.onclick = function(){
        telaMito2.style.display = 'none';
        telaDePergunta3.style.display = 'block';
    }  
    trocaDeTelaMito3.onclick = function(){
        telaDePergunta3.style.display = 'none';
        telaMito3.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    
    trocaDeTelaVerdade3.onclick = function(){
        telaDePergunta3.style.display = 'none';
        telaTrue3.style.display = 'block';
    }
    proximaTela4.onclick = function(){
        telaTrue3.style.display = 'none';
        telaDePergunta4.style.display = 'block';
    }
    proximaTela24.onclick = function(){
        telaMito3.style.display = 'none';
        telaDePergunta4.style.display = 'block';
    }
    trocaDeTelaMito4.onclick = function(){
        telaDePergunta4.style.display = 'none';
        telaMito4.style.display = 'block';
    }
    
    trocaDeTelaVerdade4.onclick = function(){
        telaDePergunta4.style.display = 'none';
        telaTrue4.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    proximaTela5.onclick = function(){
        telaTrue4.style.display = 'none';
        telaDePergunta5.style.display = 'block';
    }
    proximaTela25.onclick = function(){
        telaMito4.style.display = 'none';
        telaDePergunta5.style.display = 'block';
    }
    trocaDeTelaMito5.onclick = function(){
        telaDePergunta5.style.display = 'none';
        telaMito5.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    
    trocaDeTelaVerdade5.onclick = function(){
        telaDePergunta5.style.display = 'none';
        telaTrue5.style.display = 'block';
    }
    proximaTela6.onclick = function(){
        telaTrue5.style.display = 'none';
        telaDePergunta6.style.display = 'block';
    }
    proximaTela26.onclick = function(){
        telaMito5.style.display = 'none';
        telaDePergunta6.style.display = 'block';
    }
    trocaDeTelaMito6.onclick = function(){
        telaDePergunta6.style.display = 'none';
        telaMito6.style.display = 'block';
    }
    trocaDeTelaVerdade6.onclick = function(){
        telaDePergunta6.style.display = 'none';
        telaTrue6.style.display = 'block';

        if(clicks <= 6){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
          }
    }
    proximaTelaFinal.onclick = function(){
        telaTrue6.style.display = 'none';
        telaDeFinalizacao.style.display = 'block';
    }
    proximaTelaFinal2.onclick = function(){
        telaMito6.style.display = 'none';
        telaDeFinalizacao.style.display = 'block';
    }







  


};

