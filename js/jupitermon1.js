let intervalo = null 
intervalo = setInterval(function (){
    alert('Você tem que fazer uma escolha muito difícil!, sair da matrix ou permanecer nela! Ao escolher a pilula vermelha, você saberá toda a verdade sobre o governo de Front e combaterá vilões perigosos! Se escolher a pilula azul continuará tendo uma vida normal e sem aventuras!')
    var caminho = prompt('1 pilula vermelha ou 2 para pilula azul, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 pilula vermelha ou 2 para pilula azul, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/jupitermon2.html"
        }

        else {
            location.href ="../html/gameover.html"
        }

        clearInterval(intervalo)
    }, 3000)