// This will demo Parallel Routing
// Parallel routes are an advanced routing mechanism that allows for the 
// simultaneous rendering of multiple pages within the same layout

// import Users from "./@users/page";
// import Notifications from "./@notifications/page";
// import Revenue from "./@revenue/page";
export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    login: React.ReactNode
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display:"flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display:"flex", flex: 1}}>{notifications}</div>
            </div>
        </div>
    ) : (login)
}