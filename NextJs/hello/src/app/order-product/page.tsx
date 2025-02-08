"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const placeOrder = () => {
        console.log("order placed");
        router.push("/");
    }
    return (
        <>
            <div> place your order</div>
            <button onClick={() => placeOrder()}>Place order</button>
        </>
    )
}