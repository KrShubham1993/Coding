// [] in folder name is used for dynamic route matching
// now /products/1 or 2 or iphone, anything will be matched and [productId]'s page.tsx will be rendered

"use client"
function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}
export default function layout({children}:{children:React.ReactNode}) {
    const random = getRandomInt(2);
    if(random === 1) throw new Error("error loading review");
    return (
        <>
            {children}
            <h2> Features products</h2>
        </>
    );
}