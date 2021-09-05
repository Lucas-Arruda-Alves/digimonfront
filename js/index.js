let intervalo = null 
intervalo = setInterval(function (){
    var caminho = prompt('Qual Digimon irá te acompanhar nessa aventura: 1 - Jupitermon, 2 - Gatemon ou 3 - Borutomon ? Digite o número');
    while(caminho !== '1' && caminho !== '2' && caminho !=='3' ) {

    caminho = prompt('Qual Digimon irá te acompanhar nessa aventura: 1 - Jupitermon, 2 - Gatemon ou 3 - Borutomon ? Digite o número');

    }

    if(caminho == '1'){
        location.href ="html/jupitermon1.html"
    }

    else if(caminho == '2'){
        location.href ="html/borutomon1.html"
    }

    else location.href ="html/gatemon1.html"
    clearInterval(intervalo)
}, 3000)
