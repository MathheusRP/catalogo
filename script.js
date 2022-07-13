let local1 = document.querySelector('.actionsFigure')
let local2 = document.querySelector('.paintings')



function produtos(valor){
   
for(let i = 0; i < valor.length; i++){
    let produto = valor[i]
    let card = criarCard(produto)
    
    if(valor[i].tipo === "painting"){
        local2.append(card)
     }
     if(valor[i].tipo === "actions"){
        local1.append(card)
     }
}
}
console.log(produtos(listaDeProdutos))

function criarCard(valor){
// coletando informações
let produtoNome         = valor.nome
let produtoPreco        = valor.preco
let produtoImagem       = valor.img
let produtoTipo         = valor.tipo


// Criando elementos
let lista               = document.createElement('li')
let img                 = document.createElement('img')
let div                 = document.createElement('div')
let nome                = document.createElement('h2')
let preco               = document.createElement('p')


// tratando os elementos
lista.className         = 'card'
div.className           = 'cardText' 
nome.className          = 'titulo'
nome.innerText          = produtoNome
preco.className         = 'preco'
preco.innerText         = produtoPreco
img.alt                 = produtoNome


if(produtoTipo == "actions"){
    img.src = `./img/actions/${produtoImagem}`
    tipoo = "actions"
}else if(produtoTipo == "painting"){
    img.src = `./img/painting/${produtoImagem}`
    tipoo = "painting"
}

// montando card
lista.appendChild(img)
lista.appendChild(div)
div.appendChild(nome)
div.appendChild(preco)
// console.log(lista)
return lista
}

{/* <li class = "card">

<img src="./img/actions/animewoman.jpg" alt="Anime Woman">
<div class ="cardText">
    <h2 class ="titulo">Nome</h2>
    <p class ="preco">Preço</p>
</div>

</li> */}


