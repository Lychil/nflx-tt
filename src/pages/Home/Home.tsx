import { HomeSection, HomeSectionTitle, HomeWrapper } from "./styles";
import Products from "@/components/products/Products";
import { products } from "@/common/data/products";

export default function Home() {
    return (
        <HomeWrapper>
            <HomeSection>
                <HomeSectionTitle>Наушники</HomeSectionTitle>
                <Products products={products.headphones.slice(0, 6)} />
            </HomeSection>
            <HomeSection>
                <HomeSectionTitle>Беспроводные наушники</HomeSectionTitle>
                <Products products={products.wirelessHeadphones.slice(0, 3)} />
            </HomeSection>
        </HomeWrapper>
    )
}
