import Link from "next/link"

export const metadata = {
    title: "About Demo Project"
}
export default function About() {
    return (
        <>
            <Link href="/">Home</Link>
            <h1> About {new Date().toLocaleTimeString()} </h1>
        </>
    )
}