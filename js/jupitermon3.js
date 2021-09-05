let intervalo = null 
intervalo = setInterval(function (){
    alert('Você escolhe ficar em Front e lutar pelo povo mesmo com a identidade revelada ou ir embora e ter uma nova vida')
    var caminho = prompt('1 Ficar ou 2 para meter o pé, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 Ficar ou 2 para meter o pé, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/win.html"
        }

        else {
            location.href ="../html/gameover.html"
        }

        clearInterval(intervalo)
    }, 3000)