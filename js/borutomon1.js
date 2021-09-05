let intervalo = null 
intervalo = setInterval(function (){
    alert('Você tem que fazer uma escolha muito difícil!, revelar os segredos sobre a maçonaria de Front, ou continuar quieto e sem chamar atenção!!')
    var caminho = prompt('1 revelar os segredos damaçonaria ou 2 para ficar em silêncio, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 revelar os segredos da maçonaria ou 2 para ficar em silêncio, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/borutomon2.html"
        }

        else {
            location.href ="../html/gameover.html"
        }

        clearInterval(intervalo)
    }, 3000)