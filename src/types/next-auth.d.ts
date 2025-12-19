import { DefaultSession } from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        // Add other custom properties if needed, e.g. role: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        // Add other custom properties if needed
    }
}
