var dataBasePromo = {
    dados: [
        {
            titulo: 'Refrigerante de Cola',
            descricao: '50% de desconto no Edmundo Taioba',
            imagem: 'http://lorempixel.com/200/200/food/1',
            categoria: 'bebidas',
            preco: 4.00
        }, {
            titulo: 'Tempero pronto',
            descricao: '20% de desconto no Zé das Couves',
            imagem: 'http://lorempixel.com/200/200/food/2',
            categoria: 'temperos',
            preco: 24.00
        }, {
            titulo: 'Contra Filé',
            descricao: '10% de desconto no Zé das Couves',
            imagem: 'http://lorempixel.com/200/200/food/3',
            categoria: 'carnes',
            preco: 72.00
        }, {
            titulo: 'Pizza congelada',
            descricao: '10% de desconto no Edmundo Taioba',
            imagem: 'http://lorempixel.com/200/200/food/4',
            categoria: 'comidas',
            preco: 18.00
        }, {
            titulo: 'Doce de Leite Viçosa',
            descricao: '50% de desconto no Zé das Couves',
            imagem: 'http://lorempixel.com/200/200/food/5',
            categoria: 'sobremesas',
            preco: 15.00
        }, {
            titulo: 'Guaraná',
            descricao: '50% de desconto no Edmundo Taioba',
            imagem: 'http://lorempixel.com/200/200/food/3',
            categoria: 'bebidas',
            preco: 3.50
        }, {
            titulo: 'Alface',
            descricao: 'Compre 1 e leve 2 no Zé das Couves',
            imagem: 'http://lorempixel.com/200/200/food/4',
            categoria: 'comidas',
            preco: 2.00
        }, {
            titulo: 'Sal grosso',
            descricao: '33% de desconto no Zé das Couves',
            imagem: 'http://lorempixel.com/200/200/food/5',
            categoria: 'temperos',
            preco: 2.00
        }
    ]
}

var dataBaseProd = {
    dados: [
        {
            titulo: 'Refrigerante de Cola',
            descricao: 'Refrigerante gaseificado de cola',
            imagem: 'http://lorempixel.com/200/200/food/1',
            categoria: 'bebidas',
            preco: 8.00
        }, {
            titulo: 'Tempero pronto',
            descricao: 'Tempero pronto de sal e alho',
            imagem: 'http://lorempixel.com/200/200/food/2',
            categoria: 'temperos',
            preco: 30.00
        }, {
            titulo: 'Contra Filé',
            descricao: '1kg de Contra Filé',
            imagem: 'http://lorempixel.com/200/200/food/3',
            categoria: 'carnes',
            preco: 80.00
        }, {
            titulo: 'Pizza congelada',
            descricao: '1 caixa de pizza congelada pronta para o forno',
            imagem: 'http://lorempixel.com/200/200/food/4',
            categoria: 'comidas',
            preco: 20.00
        }, {
            titulo: 'Doce de Leite Viçosa',
            descricao: '1 lata de doce de leite',
            imagem: 'http://lorempixel.com/200/200/food/5',
            categoria: 'sobremesas',
            preco: 30.00
        }, {
            titulo: 'Guaraná',
            descricao: 'Refrigerante gaseificado',
            imagem: 'http://lorempixel.com/200/200/food/3',
            categoria: 'bebidas',
            preco: 7.00
        }, {
            titulo: 'Alface',
            descricao: 'Alface organica',
            imagem: 'http://lorempixel.com/200/200/food/4',
            categoria: 'comidas',
            preco: 2.00
        }, {
            titulo: 'Sal grosso',
            descricao: 'Saquinho de sal grosso',
            imagem: 'http://lorempixel.com/200/200/food/5',
            categoria: 'temperos',
            preco: 3.00
        }
    ]
}
var promocao = '';
for (i=0; i < dataBasePromo.dados.length; i++) {
    promocao += `<div><img src="${ dataBasePromo.dados[i].imagem }"></img> <br> <p>Promoção: ${ dataBasePromo.dados[i].titulo } </p> <br> <p> ${ dataBasePromo.dados[i].descricao } </p> <br> <p>Preço: ${ dataBasePromo.dados[i].preco } </p></div>`
}
document.getElementById('promo').innerHTML = promocao;

var produto = '';
for (i=0; i < dataBaseProd.dados.length; i++) {
    produto += `<div><img src="${ dataBaseProd.dados[i].imagem }"></img> <br> <p>Produto: ${ dataBaseProd.dados[i].titulo } </p> <br> <p> ${ dataBaseProd.dados[i].descricao } </p> <br> <p>Preço: ${ dataBaseProd.dados[i].preco } </p></div>`
}
document.getElementById('prod').innerHTML = produto;