import React from "react";
import { RequireSignIn } from "@clerk/clerk-react";

const Dashboard = () => {
    return (
        <RequireSignIn>
            <h1>Welcome to Your Dashboard!</h1>
        </RequireSignIn>
    );
};

export default Dashboard;
