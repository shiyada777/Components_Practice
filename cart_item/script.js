const cart=document.getElementById('cart');
const counter=document.getElementById('counter');
const addToCart=document.getElementById('addtocart');
const removeBtn =document.getElementById('remove');
let cartCount=0;
cart.addEventListener('click',()=>{
    window.location.href='cart.html'
})

addToCart.addEventListener('click',()=>{
    counter.innerText=++cartCount;
    // let presentCount= cartCount+;
})

removeBtn.addEventListener('click',()=>{
    counter.innerText=--cartCount;
})
