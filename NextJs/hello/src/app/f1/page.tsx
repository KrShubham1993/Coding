import Link from "next/link";

export default function f1() {
    return (
        <div>
            F1 
            <Link href="/f1/f2">goto f2</Link><br/>
            <Link href="/f1/f3/f4">goto f3/f4</Link>
        </div>
    );
}