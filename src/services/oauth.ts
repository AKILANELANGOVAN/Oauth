import { Injectable, NgZone } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { authConfig } from '../app/auth.config';

@Injectable({
  providedIn: 'root'
})
export class Oauth {
  private profile: any = null;
  private userInfoSubject = new BehaviorSubject({
    name: '',
    email: '',
    picture: 'assets/default-avatar.png'
  });

  userInfo$ = this.userInfoSubject.asObservable(); // expose as observable

  constructor(
    private authService: OAuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.configure();
  }

  private configure() {
    this.authService.configure(authConfig);

    this.authService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.isLoggedIn) {
        this.authService.loadUserProfile().then((profile: any) => {
          this.profile = profile.info || profile;
          this.emitUserInfo();
          this.ngZone.run(() => this.router.navigate(['/home']));
        });
      }
    });
  }

  login() {
    this.authService.initLoginFlow();
    this.authService.events.subscribe(e => {
      if (e.type === 'token_received') {
        this.authService.loadUserProfile().then((profile: any) => {
          this.profile = profile.info || profile;
          this.emitUserInfo();
          this.ngZone.run(() => this.router.navigate(['/home']));
        });
      }
    });
  }

  private emitUserInfo() {
    this.userInfoSubject.next({
      name: this.profile?.name || '',
      email: this.profile?.email || '',
      picture: this.profile?.picture || 'assets/default-avatar.png'
    });
  }

  get isLoggedIn(): boolean {
    return this.authService.hasValidAccessToken();
  }
}
