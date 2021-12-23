import { Auth } from "./auth.model";

export class User {
    id: string | null;
    name: string | null;
    fullname: string | null;
    email: string | null;
    auth: Auth | null;

    constructor() {
        this.id = null;
        this.name = null;
        this.fullname = null;
        this.email = null;
        this.auth = null
    }
}
