"use client";
import { notFound } from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}
export default function ReviewDetail(
    {params}:{ params:{
        productId: string,
        reviewId: string
    }
}) {
    const random = getRandomInt(2);
    if(random === 1) throw new Error("error loading review");
    if(parseInt(params.reviewId)> 1000)
        notFound();
    return(
        <>
            <h1> Details of product {params.productId}</h1>
            <h2> Reviews is ... {params.reviewId}</h2>
        </>
    )
}