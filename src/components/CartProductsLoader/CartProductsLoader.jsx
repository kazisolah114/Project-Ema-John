import { getShoppingCart } from "../../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()


    const storedCart = getShoppingCart()
    console.log(storedCart)
    const savedCart = [];
    for(const id in storedCart) {
        const addedProduct = products.filter(product => product.id === id);
        if(addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart;
}
export default CartProductsLoader;