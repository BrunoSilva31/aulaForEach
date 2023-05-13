//Array de objetos
const pets = [
    {nome: 'Thor', tipo: 'cachorro'},
    {nome: 'Rex', tipo: 'cachorro'},
    {nome: 'Felix', tipo: 'gato'},
    {nome: 'Mel', tipo: 'gato'},
    {nome: 'Brisa', tipo: 'calopsita'},
]

//Nomes
pets.forEach((item) => {
    console.log(item.nome)
})

//Nomes dos cachorros
let nomesCachorros = pets.filter((item) => {
    return item.tipo == 'cachorro'
})

console.log(nomesCachorros)
