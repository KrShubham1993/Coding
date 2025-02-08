import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // we can use condition instead of mathcer, as well
    // if(request.nextUrl.pathname === "/profile")
    // return NextResponse.redirect(new URL('/', request.url))

    // handle cookies with middleware
    const response = NextResponse.next();
    const themePref = request.cookies.get("theme");
    if(!themePref) {
        response.cookies.set("theme", "dark");
    }
    // handle headers in middleware
    response.headers.set("custom-header", "custom-value");
    return response;
}

// the matcher / url to which this middleware applies to
export const config = {
    matcher: "/profile"
}