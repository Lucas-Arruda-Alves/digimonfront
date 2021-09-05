let intervalo = null 
intervalo = setInterval(function (){
    alert('Para ajudar o povo você deverá revelar seu disfarce na emissora de TV NOJO e colocar todos seus amigos próximos em risco... Se sua escolha for manter o disface o povo morrerá em algumas horas de fome!, Vai la e escolhe logo, rápido o povo está precisando!!')
    var caminho = prompt('1 Revelar o disfarce ou 2 para manter o disfarce, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 Revelar o disfarce ou 2 para manter o disfarce, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/jupitermon3.html"
        }

        else {
            location.href ="../html/gameover.html"
        }

        clearInterval(intervalo)
    }, 3000)