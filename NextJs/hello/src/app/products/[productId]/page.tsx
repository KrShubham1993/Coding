import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

// export const generateMetadata = ({params}:Props): Metadata => {
//     return {
//         title: `Product ${params.productId}`
//     }
// }
export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    let title = await new Promise(resolve => {
        setTimeout(() => {
            resolve (`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}
export default function ProductDetails({params}:Props) {
    return (
        <h1> Details of the product {params.productId}</h1>
    )
}