import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from '../login/login';
import { Home } from '../home/home'; // ✅ Add this
import { Oauth } from '../services/oauth';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,], // ✅ Add Home here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Oauth-Login-app';
   constructor(private oauthService: Oauth) {

   }
}

