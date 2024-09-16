import { CartPurchaseBtn, CartPurchaseTotal, CartPurchaseTotalText, CartPurchaseWrapper } from "./styles";

export default function CartPurchase() {
    return (
        <CartPurchaseWrapper>
            <CartPurchaseTotal>
                <CartPurchaseTotalText>ИТОГО</CartPurchaseTotalText>
                <CartPurchaseTotalText>₽ 2 927</CartPurchaseTotalText>
            </CartPurchaseTotal>
            <CartPurchaseBtn>
                Перейти к оформлению
            </CartPurchaseBtn>
        </CartPurchaseWrapper>
    )
}
