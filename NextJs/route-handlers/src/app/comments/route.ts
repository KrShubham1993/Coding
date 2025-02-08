import { comments } from "./data";
import { type NextRequest } from "next/server";


// export async function GET() {
//     return Response.json(comments);
// }

export async function POST(request: Request) {
    const comment = await request.json();
    const newcomment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment),{
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
}


// accessing url query parameters
export async function GET(request: NextRequest) {
    const allSearchParams = request.nextUrl.searchParams;
    // we will pass ?query="first" as query parameter
    const query:any = allSearchParams.get('query');
    const filtered = comments.find(comment => comment.text.includes(query));
    console.log('query = ', query);
    console.log('filtered = ', filtered)
    const filteredComments = query
        ? comments.filter(comment => comment.text.includes(query))
        : comments
    return Response.json(filteredComments);
}