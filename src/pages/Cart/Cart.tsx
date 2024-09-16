import CartPurchase from "@/components/cart-purchase/CartPurchase";
import CartProducts from "./components/cart-products/CartProducts";
import { CartContent, CartTitle, CartWrapper } from "./styles";

export default function Cart() {
    return (
        <CartWrapper>
            <CartTitle>Корзина</CartTitle>
            <CartContent>
                <CartProducts />
                <CartPurchase />
            </CartContent>
        </CartWrapper>
    )
}
