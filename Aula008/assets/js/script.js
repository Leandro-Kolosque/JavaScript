function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('iAnoNasc')
    var res = document.getElementById('res')

    if (Number(fAno.value.lenght) == 0 || Number(fAno.value) > ano){
        window.alert("[ERRO]: Verifique os dados e tente novamente !!")
    }else{
        var fSex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var gen = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 16) {
                //CRIANÇA
                img.setAttribute('src', './assets/imgs/gurizinho.png')
            } else if (idade > 16 && idade <= 22) {
                //JOVEM
                img.setAttribute('src', './assets/imgs/menino.png')
            } else if (idade > 22 && idade <= 60) {
                //ADULTO
                img.setAttribute('src', './assets/imgs/homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', './assets/imgs/idoso.png')
            }
        } else if (fSex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 16) {
                //CRIANÇA
                img.setAttribute('src', './assets/imgs/garotinha.png')
            } else if (idade > 16 && idade <= 22) {
                //JOVEM
                img.setAttribute('src', './assets/imgs/menina.png')
            } else if (idade > 22 && idade <= 60) {
                //ADULTO
                img.setAttribute('src', './assets/imgs/mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', './assets/imgs/idosa.png')
            }
        }else{
            window.alert("[ERRO]: Verifique os dados e tente novamente !!")
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com a idade: ${idade} anos.`
    res.appendChild(img)
    img.style.width= '250px'
}