import CartItem from "../cart-item/CartItem";
import { CartListWrapper } from "./styles";

export default function CartList() {
    return (
        <CartListWrapper>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </CartListWrapper>
    )
}
