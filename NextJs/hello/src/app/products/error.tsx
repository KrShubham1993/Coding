"use client"
export default function ErrorBoundary(
    {error, reset}:{error: Error, reset: () => void}) {
    return (
        <div>
            Error in review id = {error.message}
            <button onClick={reset}>Try again</button>
        </div>
    );
}