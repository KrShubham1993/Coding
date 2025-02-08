// In production build caching happens by default, so we will see same time on reload
// to disable caching we do the following : 
    // default value of dynamic is "auto", which we will change ->
export const dynamic = "force-dynamic";

// 2 other ways to disable caching are 
    // 1. using the Request object with GET method
    // 2. employing dynamic functions like headers() and cookies()
    // 3. Using any http methods other than GET

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}