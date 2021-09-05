let intervalo = null 
intervalo = setInterval(function (){
    alert('Você treinou seu exército e está pronta para atacar, mas descobriu que o dono da empresa sofre de uma terrível doença no coração e vai se entregar para as autoridades de Front! ')
    var caminho = prompt('1 Atacar seu chefe ou 2 para deixar a justiça agir!, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 Atacar seu chefe ou 2 para deixar a justiça agir!, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/gameover.html"
        }

        else {
            location.href ="../html/win.html" 
        }

        clearInterval(intervalo)
    }, 3000)