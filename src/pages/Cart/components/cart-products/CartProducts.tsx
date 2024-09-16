import CartList from "@/components/cart-list/CartList";
import { CartProductsSection } from "@/pages/Cart/components/cart-products/styles";

export default function CartProducts() {
    return (
        <CartProductsSection>
            <CartList />
        </CartProductsSection>
    )
}
