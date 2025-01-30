import { AuthModal } from "@organisms/AuthModal";
import { useAuthStore } from "@store/useAuthStore"
import React from "react";

export const ProtectedRoute: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { isAuthenticated } = useAuthStore();

    return (
        <>
            <AuthModal isOpen={!isAuthenticated} />
            {isAuthenticated ? children : null}
        </>
    );
    
}