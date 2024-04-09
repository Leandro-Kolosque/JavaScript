function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas `

    if (hora >=0 && hora < 12){
        //BOM DIA
        imagem.src='./assets/imgs/manha.png'
        document.body.style.background='#e2cd9f'
    }else if(hora >=12 && hora < 18){
        //BOA TARDE
        imagem.src='./assets/imgs/tarde.png'
        document.body.style.background='#b9846f'
    }else{
        //BOA NOITE
        imagem.src='./assets/imgs/noite.png'
        document.body.style.background='#405663'
    }
}
