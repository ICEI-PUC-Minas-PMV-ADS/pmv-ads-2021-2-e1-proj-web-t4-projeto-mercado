var cadastroProdutos = [
    {
    "marca":"Dolly",
    "especificacoes":[
        {
        "Sabor":"Guarana",
        "Volume":2 + " litros",
        }]
    },
    {
        "marca":"Coca-Cola",
        "especificacoes":[
            {
            "Sabor":"Cola",
            "Volume":2 + " litros",
        }]
    },
    {
        "marca":"Fanta",
        "especificacoes":[
            {
            "Sabor":"Laranja",
            "Volume": 2 + " litros",
        }]
    },

    {
        "marca":"Sprite",
        "especificacoes":[
            {
            "Sabor":"Limão",
            "Volume": 500 + " ml",
        }]
    }
]

function exibirCadastro(){

    var box = document.getElementById("digita_busca");

    if(box.value == "bebidas"){

        var texto = "";

        for(var x=0; x < cadastroProdutos.length; x++){

            texto = texto + `<div>Refrigerante: ${cadastroProdutos[x].marca}<br><br></div>`;     

            for(var y=0; y < cadastroProdutos[x].especificacoes.length; y++){

                let marca = `${cadastroProdutos[x].especificacoes[y].Sabor}`;
                let volume = `${cadastroProdutos[x].especificacoes[y].Volume}<br><br>`;

                texto += `<div><li>${marca} - ${volume} </li></div>`;
            }
        }        
        var tela = document.getElementById("hajaLuz");
        tela.innerHTML = texto;      
    }
}