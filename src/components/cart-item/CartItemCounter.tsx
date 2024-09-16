import { CartItemCounterBtn, CartItemCounterBtnImg, CartItemCounterQuantity, CartItemCounterWrapper } from "@/components/cart-item/styles";
import plusImg from "@/images/svg/plus.svg";
import minusImg from "@/images/svg/minus.svg";

export default function CartItemCounter() {
    return (
        <CartItemCounterWrapper>
            <CartItemCounterBtn>
                <CartItemCounterBtnImg src={minusImg} />
            </CartItemCounterBtn>
            <CartItemCounterQuantity>{0}</CartItemCounterQuantity>
            <CartItemCounterBtn>
                <CartItemCounterBtnImg src={plusImg} />
            </CartItemCounterBtn>
        </CartItemCounterWrapper>
    )
}
