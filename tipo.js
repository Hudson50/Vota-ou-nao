function verificar(param) {
    let ida = document.getElementById('txt')
    let res = document.getElementById('res')
    let idade = Number(ida.value)
    if(idade < 16) {
        res.innerHTML = ('Não vota')
    } else if (idade < 18 || idade > 65) {
        res.innerHTML = ('Voto Opcional')
    } else {
        res.innerHTML = ('Voto Obrigatorio')
    }

}