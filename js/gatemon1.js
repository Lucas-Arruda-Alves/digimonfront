let intervalo = null 
intervalo = setInterval(function (){
    alert('Gates era um hacker ético de uma das maiores empresas de energia de Front e descobriu algo que poderia mudar todo o rumo da população! Ele descobriu uma maneira de conseguir energia gratis e renovável; A empresa estava escondendo este segredo e estorquindo os cidadãos... ')
    var caminho = prompt('1 manter o emprego seguro ou 2 correr os riscos para ajudar o povo, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 manter o emprego seguro ou 2 correr os riscos para ajudar o povo, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/gameover.html"
        }

        else {
            location.href ="../html/gatemon2.html"
        }

        clearInterval(intervalo)
    }, 3000)