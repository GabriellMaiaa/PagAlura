// 1 - Destructuring e Funções - Revisão\Lucas

const fruits = ['Maçã', 'Banana', 'Mamão'] //Array
console.log(fruits)

const fruits2 = [ // Aqui se trata de um ARRAY de OBJETOS
    {nome: 'Mamão', peso: '1 Kg'},
    {nome: 'Maçã', peso: '0.3 Kg'},
    {nome: 'Banana', peso: '0.5Kg'}
]

// 2 - Funções Auxiliares do ES6 (MAP, FILTER, REDUCE e etc)

// O MAP te traz um novo ARRAY as características que você quer implantar:
const products = [
    {nome: 'Camisa', category: 'Roupas'},
    {nome: 'Tênis', category: 'Calçados'},
    {nome: 'Relógio', category: 'Acessórios'},
]

products.map((product) => { /// Função Map em ação. Ele está adicionando um produto a venda com base no filtro
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)

/// FUNÇÃO FILTER - Ela filtra os valores que você quer do Array

const teste = [10,748,36,2,45,36,78,32]                                                                                                                                               

const testeNumeros = teste.filter((n) => { // A função só vai retornar os valores maiores que 35
    if(n <= 35){
        return n
    }
})

console.log(testeNumeros)
                                                                                                                                                                               



