const Perfumes = document.querySelector('.perfumes');
const BuyBtn = document.querySelector('.BuyBtn');
const MenuBurguer = document.querySelector('.menu-label');
const ProductConfirm = document.querySelector('.product-confirm');

let cart = JSON.parse(LocalStorage.GetItem('cart')) || [];
const SaveLocalStorage = (CartList) => {
    LocalStorage.SetItem('cart', JSON.stringify(CartList));
};
const init = () => {

}
init();