let cart = []

async function fetchProduct(barcode){

 const res = await fetch(
 "http://localhost:5000/api/products"
 )

 const products = await res.json()

 const product = products.find(p=>p.barcode===barcode)

 if(product){

  cart.push(product)

  renderCart()

 }

}

document
.getElementById("barcode")
.addEventListener("keypress",function(e){

 if(e.key==="Enter"){
  fetchProduct(this.value)
  this.value=""
 }

})

function renderCart(){

 const cartDiv = document.getElementById("cart")

 cartDiv.innerHTML=""

 cart.forEach(p=>{
  cartDiv.innerHTML += `<div>${p.name} ₹${p.selling_price}</div>`
 })

}

async function checkout(){

 const total = cart.reduce((a,b)=>a+b.selling_price,0)

 await fetch(
 "http://localhost:5000/api/sales",
 {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({items:cart,total})
 }
 )

 alert("Sale complete")

 cart=[]
 renderCart()

}
