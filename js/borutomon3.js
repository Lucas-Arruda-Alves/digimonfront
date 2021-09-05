let intervalo = null 
intervalo = setInterval(function (){
    alert('Você estava dentro a caverna e passou 3 meses de muita solidão, porém teve bastente tempo para criar um plano infalível para desmacarar todo o esquema de corrupção no universo de Front, você vai arregar?')
    var caminho = prompt('1 executar o plano ou 2 para ficar em silêncio, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 executar o plano ou 2 para ficar em silêncio, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/win.html"
        }

        else {
            location.href ="../html/gameover.html"
        }

        clearInterval(intervalo)
    }, 3000)