import { CartItemBinImg, CartItemDetailsWrapper, CartItemPrice } from "@/components/cart-item/styles";
import binImg from "@/images/svg/bin.svg";

export default function CartItemDetails() {
    return (
        <CartItemDetailsWrapper>
            <CartItemBinImg src={binImg} />
            <CartItemPrice>2 927 ₽</CartItemPrice>
        </CartItemDetailsWrapper>
    )
}
