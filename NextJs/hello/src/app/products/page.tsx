import Link from "next/link"


export default function Products() {
    return (
        <>
            <Link href="/">Home</Link>
            <h1> Product List</h1>
            <h2><Link href="/products/1">product 1</Link></h2>
            <h2><Link href="/products/2">product 2</Link></h2>
            {/* the replace tag replaces the current history instead of adding a new url to history stack
                  so since current url will be /products in history stack, when we click on product 3 link,
                  it will repalce /products with /products/3
                  so stack will contain /home and /products/3, so now if we click back button we will go to homepage */}
            <h2><Link href="/products/3" replace>product 3</Link></h2>
        </>
    )
}