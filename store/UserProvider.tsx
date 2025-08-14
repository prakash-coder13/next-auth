'use client';

import  { type ReactNode } from "react";
import { UserContext } from "./UserContext";

export function UserProvider ({children

}: {children:ReactNode}){

    return(
        <UserContext value={{
            userName: "",
            permissions: [],
            loading: false,
            handleSignIn: async () => {},
            handleSignOut: async () => {},
            togglePermissions: ()=>{}
        }}>
            {children}
        </UserContext>
    );
}