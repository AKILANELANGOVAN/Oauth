import { Component, OnInit } from '@angular/core';
import { Oauth } from '../services/oauth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // ✅ Add this line
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
   user: any;

  constructor(public oauth: Oauth, private router: Router) {}

  ngOnInit(): void {
    this.oauth.userInfo$.subscribe(info => {
      this.user = info;
    });
  }
  sign_out(){

    this.router.navigate(['/login']);
  }
}
