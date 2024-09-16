import { ProductInterface } from "@/common/data/products";
import Products from "@/components/products/Products";
import { HomeSectionTitle, HomeSectionWrapper } from "../styles";


export default function HomeSection({title, products}: {title: string, products: ProductInterface[]}) {
    return (
        <HomeSectionWrapper>
            <HomeSectionTitle>{title}</HomeSectionTitle>
            <Products products={products} />
        </HomeSectionWrapper>
    )
}
