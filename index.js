// const Perfumes = document.querySelector('.perfumes');
// const BuyBtn = document.querySelector('.BuyBtn');
// const MenuBtn = document.querySelector('.menu-label');
// const ProductConfirm = document.querySelector('.product-confirm');



// let cart = JSON.parse(LocalStorage.GetItem('cart')) || [];
// const SaveLocalStorage = (CartList) => {
//     LocalStorage.SetItem('cart', JSON.stringify(CartList));
// };

// const MenuToggle = () =>{
//     MenuBtn.classList.toggle('menu-toggle');
//     if(cartMenu.classList.contains('open-cart')){
//         cartMenu.classList.remove ('open-cart')
//         return;
//     }
//     overlay.classList.toggle('show-overlay');
// }

// const init = () => {
//     MenuBtn.addEventListener('click', MenuToggle);
// }
// init();


const cartMenu = document.querySelector('cart')

console.log(products)
 products.forEach((producto) => {
    const div = document.createElement('div')
     div.classList.add('producto')
     div.innerHTML = `
     <div class="perfumes">
         <div>
             <img src="${producto.productImg}" alt="">
             <h2>${producto.name} ${producto.ml} </h2>
             <p>${producto.price}</p>
             <a href="#" class="BuyBtn" id="agregar ${producto.id}">Comprar</a>
         </div>
     </div>`
 });

 const btn = document.getElementById (`agregar${producto.id}`)

    btn.addEventListener('click', () =>{
    addItemCart(producto.id)
 })

 cartMenu.appendChild(div)

 let cart = [

 ]

 const addItemCart = (prodId) => {
     const item = products.find((prod) => prod.id === prodId)
     cart.push(item)
     console.log(cart)
 }
