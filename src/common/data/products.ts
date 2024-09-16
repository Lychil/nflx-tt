import product1Img from "@/images/products/product_1.png";

export interface ProductInterface {
    id: number,
    name: string,
    newPrice: number,
    oldPrice: number,
    rating: number
    previewImg: string
}

export interface ProductsInterface {
    title: string
    products: ProductInterface[]
}

export const products: ProductsInterface[] = [
    {
        title: "Наушники",
        products: [
            {
                id: 2222,
                name: "Apple BYZ S852I",
                newPrice: 2927,
                oldPrice: 3527,
                rating: 4.7,
                previewImg: product1Img
            },
            {
                id: 2223,
                name: "Apple EarPods",
                newPrice: 2327,
                oldPrice: 0,
                rating: 4.5,
                previewImg: product1Img
            },
            {
                id: 2224,
                name: "Apple EarPods",
                newPrice: 2327,
                oldPrice: 0,
                rating: 4.5,
                previewImg: product1Img
            },
            {
                id: 2225,
                name: "Apple BYZ S852I",
                newPrice: 2927,
                oldPrice: 0,
                rating: 4.7,
                previewImg: product1Img
            },
            {
                id: 2226,
                name: "Apple EarPods",
                newPrice: 2327,
                oldPrice: 0,
                rating: 4.5,
                previewImg: product1Img
            },
            {
                id: 2227,
                name: "Apple EarPods",
                newPrice: 2327,
                oldPrice: 0,
                rating: 4.5,
                previewImg: product1Img
            }
        ]
    }
    ,
    {
        title: "Беспроводные",
        products: [
            {
                id: 3333,
                name: "Apple AirPods",
                newPrice: 9527,
                oldPrice: 0,
                rating: 4.7,
                previewImg: product1Img
            },
            {
                id: 3334,
                name: "GERLAX GH-04",
                newPrice: 6527,
                oldPrice: 0,
                rating: 4.7,
                previewImg: product1Img
            },
            {
                id: 3335,
                name: "BOROFONE BO4",
                newPrice: 7527,
                oldPrice: 0,
                rating: 4.7,
                previewImg: product1Img
            }
        ]
    }
]