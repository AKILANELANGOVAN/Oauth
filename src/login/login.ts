import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Oauth } from '../services/oauth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor( private oauth : Oauth,private router :Router,){

  }
   trigger_Oauth() {
    this.oauth.login(); // Call the method from your service
    

  }
  
  home_redirect(){
   this.router.navigate(['/home']);
  }
 
  
}
