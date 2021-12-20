export interface Auth {
    access_token: string,
    expires_at: Date,
    expires_in: Date,
    first_issued_at: Date,
    id_token: string,
    idpId: string,
    login_hint: string,
    scope: string,
    token_type: string
}
