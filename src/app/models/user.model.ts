import { Auth } from "./auth.model";

export interface User {
    id: string | null,
    name: string | null,
    fullname: string | null,
    email: string | null,
    auth: Auth | null
}
