// @ in folder name is used to define slots
// these folders do not become part of routes
// these are used for composition purpose
// it -> porvides granular control, meaning 'notifications', 'users' etc can have their on loading and error state handling

import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <div>Notifications</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
}