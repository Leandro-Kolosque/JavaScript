function contar(){
    var inicio = document.getElementById('iInicio')
    var fim = document.getElementById('iFim')
    var passo = document.getElementById('iPasso')
    var res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.leght == 0){
        window.alert('[ERRO] faltam dados')
    }else{
        res.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
            //Contagem Crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉🏻`
            }
        }else{
            //Contagem Decrescente
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👉🏻`
            }
        }
        res.innerHTML += `🎌`   
    }
        
}