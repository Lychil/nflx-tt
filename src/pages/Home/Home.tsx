import { HomeWrapper } from "./styles";
import { products } from "@/common/data/products";
import HomeSection from "./components/HomeSection";

export default function Home() {
    return (
        <HomeWrapper>
            {
                products.map((elem, i) => (
                    <HomeSection key={i} products={elem.products} title={elem.title} />
                ))
            }
        </HomeWrapper>
    )
}
