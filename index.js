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


products.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('perfumes')
    div.innerHTML = `
    <div class="perfumes">
        <div>
            <img src="${producto.productImg}" alt="">
            <h2>${producto.name} ${producto.ml} </h2>
            <p>${producto.price}</p>
            <a href="#" class="BuyBtn">Comprar</a>
        </div>
    </div>`
});

cartMenu.appendChild(div)
