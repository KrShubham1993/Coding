import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {

    // 2 ways to extract headers
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();
    
    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    // to read a cookie
    const theme = request.cookies.get('theme');
    console.log('cookie = ', theme);
    // one more way to set and get cookie usning Next's cookie function
    cookies().set("resultsPerPage", "20");
    console.log('cookie 2 = ',cookies().get('resultsPerPage'))

    return new Response("<h1>Profile Api Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            // one way to set cookie 
            "Set-Cookie": "theme=dark"
        }
    });
}