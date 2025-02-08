// @ in folder name is used to define slots
// these folders do not become part of routes
// these are used for composition purpose
// it -> porvides granular control, meaning 'notifications', 'users' etc can have their on loading and error state handling

import Card from "@/components/card";
export default function Revenue() {
    return (
        <Card>
            Revenue
        </Card>
    );
}