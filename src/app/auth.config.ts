import { AuthConfig } from "angular-oauth2-oidc";



export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: 'http://redirectmeto.com/http://13.211.159.180/home' ,
  clientId: "1078320769703-pfm3tme7kbh451kt1cvarm6jrbf0sbn5.apps.googleusercontent.com",
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
};

