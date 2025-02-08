// this file is used to handle unmatched route scenario
// if this file is not present then in unmatched routes (only for this component) scenario
    // i.e somecone clicks on Archived link in @notifications/page.tsx i.e a sub route
// we get 404 error 

// for navigation from the app, next js retains previous state / view of the unmatched routes
// for page reload it looks for a default.tsx file, which is explained above

import Card from "@/components/card";
export default function DefaultUsers() {
    return (
        <Card>
            Default Users
        </Card>
    );
}