import { Auth } from "./auth.model";

export interface User {
    id: string,
    name: string,
    fullname: string,
    email: string,
    auth: Auth
}
