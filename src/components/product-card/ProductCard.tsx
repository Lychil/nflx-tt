import { ProductCardBlock, ProductCardButton, ProductCardImg, ProductCardInfo, ProductCardNewPrice, ProductCardOldPrice, ProductCardRating, ProductCardRatingCount, ProductCardRatingImg, ProductCardTitle, ProductCardWrapper } from "./styles";
import { ProductInterface } from "@/common/data/products";
import starImg from "@/images/svg/star.svg";

interface ProductCardProps {
    product: ProductInterface
}

export default function ProductCard({ product }: ProductCardProps) {
    const { name, newPrice, oldPrice, rating, previewImg } = product;

    return (
        <ProductCardWrapper>
            <ProductCardImg src={previewImg} />
            <ProductCardInfo>
                <ProductCardBlock style={{ marginBottom: "30px" }}>
                    <ProductCardTitle>{name}</ProductCardTitle>
                    <ProductCardNewPrice>
                        {newPrice} ₽
                        {!!oldPrice && <ProductCardOldPrice>{oldPrice}₽</ProductCardOldPrice>}
                    </ProductCardNewPrice>
                </ProductCardBlock>
                <ProductCardBlock>
                    <ProductCardRating>
                        <ProductCardRatingImg src={starImg} />
                        <ProductCardRatingCount>{rating}</ProductCardRatingCount>
                    </ProductCardRating>
                    <ProductCardButton>Купить</ProductCardButton>
                </ProductCardBlock>
            </ProductCardInfo>
        </ProductCardWrapper>
    )
}
