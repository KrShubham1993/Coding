import { comments } from "../data";
import {redirect} from "next/navigation";

export async function GET(request: Request, 
    {params}:{params: {id: string}}
) {
    if(parseInt(params.id) > comments.length){
        redirect('/comments');
    }
    const comment = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(comment);
}