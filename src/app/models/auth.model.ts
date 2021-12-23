export interface Auth {
    accessToken: string,
    expiresAt: Date,
    expiresIn: Date,
    firstIssuedAt: Date,
    idToken: string,
    idpId: string,
    loginHint: string,
    scope: string,
    tokenType: string
}
