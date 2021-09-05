let intervalo = null 
intervalo = setInterval(function (){
    alert('Parabéns pela coragem, você teve honra e lutou pelos direitos do povo de Front, agora você precisa se esconder e sair de evidência e um senhor muito gentil te ofereceu abrigo, mas a familia dele ficaria em perigo...')
    var caminho = prompt('1 casa do senhor ou 2 para a caverna, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 casa do senhor ou 2 para a caverna, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/gameover.html" 
        }

        else {
            location.href ="../html/borutomon3.html"
        }

        clearInterval(intervalo)
    }, 3000)