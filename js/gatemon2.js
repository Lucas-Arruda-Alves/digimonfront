let intervalo = null 
intervalo = setInterval(function (){
    alert('Você foi até o seu computador e abriu no kali linux, em seguida utilizou uma ferramenta de extração e pegou todas as informações para tornar a energia renovável... Em seguida correu até um amigo que é jornalista e jogou as informações na TV "Mongol". Seu chefe ficou desesperado e chamou toda a equipe de hackers para uma reunião e descobriu que você foi o Robin Hood, te demitiu e você está sendo perseguido pelas maiores corporações que se beneficiava do desvio de verbas de Front!')
    var caminho = prompt('1 Atacar com força total 2 treinar o exército, digite um numero!');
    
        while(caminho !== '1' && caminho !== '2' ) {

        caminho = prompt('1 Atacar com força total 2 treinar o exército, digite um numero!');

        }

        if(caminho == '1'){
            location.href ="../html/gameover.html"
        }

        else {
            location.href ="../html/gatemon3.html" 
        }

        clearInterval(intervalo)
    }, 3000)