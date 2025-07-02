// Variáveis 
// let nome ='Otavio'
// console.log(nome)

// Com a palavra 'let' podemos alterar o valor da variavel.

// nome = 'Otavio Barbosa'
// console.log(nome)

// const idade = 29
// console.log(idade)

// Com a plavra 'const' o valor da variavel não pode ser alterada.

// idade = 35
// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)

// Mais sobre variáveis 

// let 2teste = 'inválido'
// let @teste = 'inválido'

// let a = 10, b = 20, c =30
// console.log(a, b, c) 

// const nomeCompleto = 'Otavio Barbosa'
// const nomecompleto = 'Alice Barbosa'
// console.log(nomeCompleto)
// console.log(nomecompleto)

// const _teste ='ok'
// const $teste ='ok'
// console.log(_teste, $teste)

// const age = prompt ('digite sua idade')
// console.log(`você tem ${age} anos de idade.`)

// alert('testando')

// const z = 10 

// alert(`o número é ${z}`)


// math

// console.log(Math.max(5, 2, 1, 10, 15))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))


// console.log('teste!')
// console.error('erro!')
// console.warn('aviso!')

// if 

// const m = 10

// if(m > 5){
//     console.log('m é maior que 5!')
// }

// const user = 'João'

// if(user === 'João') {
//     console.log(`Olá ${user}`)
// }

// if( user === 'Maria'){
//     console.log(`Olá ${user}`) 
// }

// console.log(user === 'João', user === 'Maria')


// else

// const loggedIn = false

// if(loggedIn){
//     console.log('Está autenticado!')
// } else{
//     console.log('Não está autenticado!')
// }

// const q = 10
// const w = 25

// if(q > 5 && w > 20){
//     console.log('Números são mais altos!')
// } else{
//     console.log('Os números não são mais altos!')
// }

// const cabelo = 'preto'


// if(cabelo === 'preto'){
//     console.log('Seu cabelo é preto!')
// } else {
//     console.log('Seu cabelo não é preto !')
// }

// const pais = 'Brasil'

// if(pais === 'Argentina'){
//     console.log('Você é Brasileiro!')
// } else{
//     console.log('Você é estrangeiro!')
// }

// const camisa = 'M'

// if(camisa == 'M'){
//     console.log('Sua camisa é M')
// } else{
//     console.log('Sua camisa não é M')   
// }

// else if 

// if(1 > 2){
//     console.log('Teste')
// } else if(2 > 3){
//     console.log('Teste 2')
// } else if(5 > 2){
//     console.log('Agora sim')
// }

// const userName = 'Otavio'
// const userAge = 29

// if(userName === 'Carlos'){
//     console.log(`Bem vindo ${userName}`)
// }
// else if(userName === 'Otavio' && userAge === 29){
//     console.log(`Olá ${userName} sua idade é ${userAge} anos`)
// } else{
//     console.log('Nenhuma condição aceita!')
// }

// while

//  let p = 0
//  while(p < 5){
//    console.log(`repetindo ${p}`)
//      p++
//  }

// loop infinito 


// let x = 10
// while(x > 5){
//     console.log(`Imprimindo ${x}`)
// }

// let a = 0
// while(a <= 30){
//     console.log(`teste ${a}`)
//     a = a +2
// }

// do while 

// let o = 10
// do {
//     console.log(`valor de o: ${o}`)
//     o--
// } while(o > 1)


// for 

// for( let t = 0; t < 10; t++){
//     console.log('Repetindo algo...')
// }

// let r = 10 
// for(r; r > 0; r = r -1){
//     console.log(`O r está diminuindo: ${r}`)
// }

// for( let t = 0; t < 10; t++){
//     console.log(`Repetindo algo ${t}`)
// }

// Identação

// com identação
for(let u = 0; u < 10; u++){
    if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0){
            console.log('deu 0')
        }
    }
}

// sem identação
for(let u = 0; u < 10; u++){
if(u * 2 > 10){
console.log(`Maior que 10! ${u}`)
} else {
if(u / 2 === 0){
console.log('deu 0')
}
}
}

// obtemos o mesmo resultado, porém o código fica bagunçado!

// break

for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`)

    if(g === 15){
        console.log('o g é 15!')
        break
    }
}

for( let h = 0; h < 26; h++ ) {
    console.log(`O valor de h é: ${h}`)
    if(h === 13) {
        console.log('O valro é 13!')
        break
    }
}