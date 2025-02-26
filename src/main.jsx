import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // Use correct variable

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <App />
  </ClerkProvider>
);
