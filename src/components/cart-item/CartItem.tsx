import { CartItemBody, CartItemImg, CartItemMain, CartItemWrapper } from "@/components/cart-item/styles";
import CartItemCounter from "@/components/cart-item/CartItemCounter";
import CartItemDetails from "@/components/cart-item/CartItemDetails";
import CartItemInfo from "@/components/cart-item/CartItemInfo";
import cartItemImg from "@/images/products/product_1.png";

export default function CartItem() {
    return (
        <CartItemWrapper>
            <CartItemBody>
                <CartItemMain>
                    <CartItemImg src={cartItemImg} />
                    <CartItemCounter />
                </CartItemMain>
                <CartItemInfo />
            </CartItemBody>
            <CartItemDetails />
        </CartItemWrapper>
    )
}
