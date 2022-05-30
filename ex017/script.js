function ver() {
    var num = document.querySelector('input#txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' /*Isso é colocado para limpar a tabuada a cada utilização*/
        while (c <= 10){
          /*pode usar var ou let*/  
            var item = document.createElement('option')
            item.text = (`${n} x ${c} = ${n*c}`)
            item.value = (`tab ${c}`)
            tab.appendChild(item)
            c++
        }    
    }    
}