function tabuada(){
    var num = document.getElementById('iNumber')
    var tab = document.getElementById('iTab')

    if(num.value.length == 0){
       window.alert('[ERRO] Por Favor Digite Um Número')
    }else{
        var n = Number(num.value)
        var c = 1
        while(c <= 10){
            var item = document.createElement('option')
            item.text= `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}