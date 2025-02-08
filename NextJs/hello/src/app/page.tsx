import Link from "next/link";

export default function Home() {
    return (
    <>
        <div> Welcome Home </div>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/register">Register</Link>
    </>
    )
}