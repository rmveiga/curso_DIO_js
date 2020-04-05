function clicar(){
    document.getElementById("thanks").innerHTML = "<i>Obrigado!!</i>"
}

function redirecionar(){
    window.open("https://financast.com.br")             // Abrenume nova aba
    //window.location.href = "https://financast.com.br"   // Abre na mesma aba
}

function trocarTexto(elemento){
    elemento.innerHTML = "Tudo bem?"
}

function voltarTexto(elemento){
    elemento.innerHTML = "Olá!"
}

function valorOpcao(elemento){
    console.log(elemento.value)
}

/* AULA 4
function soma(n1, n2){
    return n1 + n2
}

function setReplace(nome1, nome2){
    var frase = "Vai Japão"
    return frase.replace(nome1, nome2)
}

function validaIdade(idade){
    if (idade >= 18){
        return true
    }else{
        return false
    }
}

console.log(soma(5, 10))
console.log(setReplace("Japão", "Brasil"))
idade = prompt("Informe a sua idade")
console.log(validaIdade(idade))
*/

/* AULA 3
var idade = prompt("Informe a sua idade")
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}

var cont = 0
while (cont < 5){
    console.log(cont)
    cont++
}

for (cont = 1; cont <= 5; cont++){
    console.log(cont)
}

var data_atual = new Date
alert(data_atual.getDate() + "/" + (data_atual.getMonth() + 1) + "/" +data_atual.getFullYear())
*/

/* AULA 2
// ARRAY
var lista = ["vinho", "cerveja", "tequila"]
//alert(lista[2])
lista.push("whisky")
//alert(lista)
lista.pop("vinho")
console.log(lista.reverse())
console.log(lista.join(" - "))


// DICIONÁRIO
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}]
console.log(frutas[1])
alert(frutas.length)
*/

/* AULA 1
var nome = "Rafael"
alert("Bem vindo " + nome);
console.log(nome);
console.log(nome.toLocaleUpperCase())
*/