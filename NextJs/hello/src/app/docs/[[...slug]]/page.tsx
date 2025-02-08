// [...name] : This pattern is called catch-all-segments
//           : in this example, this page.tsx, will handle any route that has /docs in it
//           : eg. /docs/reviews/agents/something or /docs/1 or /docs/2/4 


export default function Docs({params}: {
    params: {
        slug: string[]
    }
}) {
    if(params.slug?.length ===2) {
        return <h1> Viewing docs for feature {params.slug[0]} and concept {params.slug[1]} </h1>
    }
    if(params.slug?.length === 1) {
        return <h1> Viewing docs for feature {params.slug[0]} </h1>
    }
    return <h1> Docs home page </h1>
}