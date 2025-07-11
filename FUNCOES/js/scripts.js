// // Criando uma função

// function minhaFuncao(){
//     console.log('testando')
// }

// minhaFuncao()
// minhaFuncao()

// const minhaFuncaoEmVariavel = function(){
//     console.log('Função em variável')
// }

// minhaFuncaoEmVariavel()

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro('Imprimindo alguma coisa.')
// funcaoComParametro('Outra função')

// // return

// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2){
//     return n1 + n2
// }

// const resultado = soma(a, b)
// console.log(resultado)

// console.log(soma(c, d))

// // 

// const f = 42
// const g = 22

// function somar(n1, n2){
//     return n1 + n2 
// }

// console.log(somar(f, g))


// // escopo da função

// let y = 10
// function testandoEscopo(){
//     let y = 20
//     console.log(`Y dentro da função é ${y}`)
// }
// y = 15

// console.log(`Y fora da função é ${y}`)

// testandoEscopo()


// let h = 25

// function escopo(){
//     let h = 45
//     console.log(`O valor de h é ${h}`)
// }
// console.log(`H fora da função vale: ${h}`)
// escopo()

// // escopo aninhado

// let m = 10

// function escopoAninhado(){
//     let m = 20
//     if(true){

//         let m = 30
//         if(true){

//             let m = 40
//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }
// escopoAninhado()
// console.log(m)


// // arrow function

// const testeArrow = () => {
//     console.log('Esta é uma arrow function')
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if(n % 2 === 0){
//         console.log('Par')
//         return
//     }
//         console.log('Impar')
// }

// parOuImpar(5)
// parOuImpar(10)
// parOuImpar(15)
// parOuImpar(22)

// // mais sobre arrow function

// const raizQuadrada = (x) => {
//    return x * x 
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x * x 

// console.log(raizQuadrada2(5))
// console.log(raizQuadrada2(12))
// console.log(raizQuadrada2(6))


// const helloWorld = () => console.log('Hello World')

// helloWorld()

// // parametro opcional 

// const multiplication = function(m, n){
//     if(n === undefined){
//         return m * 2
//     } else{
//         return m * n
//     }
// }
// console.log(multiplication(5))
// console.log(multiplication(2, 4))


// const greeting = (name) => {
//     if(!name){
//         console.log('Olá')
//         return
//     }
//     console.log(`Olá ${name}`)
// }

// greeting()
// greeting('Otávio')

// valor default 

const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}

console.log(customGreeting('Otávio!'))
console.log(customGreeting('João', 'bom dia!'))


const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText('Testando!')
repeatText('testando 5 vezes', 5)