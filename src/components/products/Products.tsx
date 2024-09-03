import { ProductInterface } from "@/common/data/products";
import ProductCard from "../product-card/ProductCard";
import { ProductsWrapper } from "./styles";


interface ProductsProps {
    products: ProductInterface[]
}

export default function Products({ products }: ProductsProps) {
    return (
        <ProductsWrapper>
            {
                products.map((elem) => <ProductCard key={elem.id} product={elem} />)
            }
        </ProductsWrapper>
    )
}
