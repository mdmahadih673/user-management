import { Suspense } from "react";
import UserCardPage from "../components/UserCard";

const getUsers = async () => {
    const response = await fetch("http://localhost:5000/deshbord", {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
};

const UserList = () => {
    const userPromise = getUsers();

    return (
        <Suspense fallback={<p className="p-10">Loading users...</p>}>
            <UserCardPage userPromise={userPromise} />
        </Suspense>
    );
};

export default UserList;