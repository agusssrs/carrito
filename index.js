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

const perfumesCards = document.querySelector('.perfumes')
const cartMenu = document.querySelector('cart')

console.log(products)
 products.forEach((producto) => {
    const div = document.createElement('div')
     div.classList.add('producto')
     div.innerHTML = `
     <div class="azzaro">
             <img src="${producto.productImg}" alt="">
             <h2>${producto.name} ${producto.ml} </h2>
             <p>$${producto.price}</p>
             <a  class="BuyBtn" id="${producto.id}">Comprar</a>
     </div>`
     perfumesCards.appendChild(div)
     const btn = document.getElementById (`${producto.id}`)
     btn.addEventListener('click', () =>addItemCart(producto.id))
 });

//  const btn = document.getElementById (`agregar${producto.id}`)

//     btn.addEventListener('click', () =>{
//     addItemCart(producto.id)
//  })

//  cartMenu.appendChild(div)

 let cart = [

 ]


const cartBox = () =>{
   let itemBuy = '<h2>Tus perfumes!</h2>';
   let total = 0;
   cart.forEach(product => {
    itemBuy += `
    <div class="cart-item">
                     <img src="${product.productImg}" alt="le beau">
                     <div class="item-info">
                         <h2 class="product-title">${product.name}</h2>
                         <h3 class="product-brand">${product.brand}</h3>
                         <p class="price">$${product.price}</p>
                     </div>
                     <div class="quantity-handler">
                         <span class="quantity-minus">-</span>
                         <span class="quantity-total">${product.cant}</span>
                         <span class="quantity-plus">+</span>
                     </div>
                 </div>
    `;     
    total += parseInt(product.price);
   });
   itemBuy += `
        <span class="end-cart-list"></span>
        <div class="total-cart">
            <p>Total:$</p>
            <span>${total}</span>
        </div>
        <button class="btn-buy">Comprar</button>
   `
   document.getElementById ('cartBox').innerHTML = itemBuy;
}

const itemHandler = () =>{
    let handler = document.querySelectorAll('.cart-item');
    handler.forEach((p,i) => {
        p[2][0].onclick= () =>{
            let index = cart.findIndex((prod) => prod.name === p[1][0]);
            cart[index].cant=cart[index].cant-1;
        }
    });
} 

const addItemCart = (prodId) => {
    const item = products.find((prod) => prod.id === prodId)
    cart.push({...item, cant:1});
    console.log(cart, 'Cart')
    localStorage.setItem ('CartItem', JSON.stringify(cart));
    cartBox ();
}

const load = () =>{
    if (localStorage.getItem('CartItem')!==null){
        cart=JSON.parse(localStorage.getItem('CartItem'))
    }
    cartBox()
}

window.onload = load;