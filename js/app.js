
const produtos=[
{
nome:"Fone Bluetooth",
preco:89.90,
img:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
},
{
nome:"Smartwatch",
preco:149.90,
img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
},
{
nome:"Notebook",
preco:2999.90,
img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
}
]

const area=document.getElementById("produtos")

produtos.forEach(p=>{

area.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h4>${p.nome}</h4>
<div class="preco">R$ ${p.preco}</div>
<button onclick="favoritar('${p.nome}')">❤️ Favoritar</button>
<button onclick="comprar('${p.nome}')">Comprar</button>
</div>
`

})

function favoritar(nome){
alert(nome+" adicionado aos favoritos")
}

function comprar(nome){
alert("Simulação de compra de "+nome)
}
