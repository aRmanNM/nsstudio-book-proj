import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../modules/core/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {}

  canLoad():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // reuse canActivate logic
    return this.canActivate();
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._isAuth()) {
        resolve(true);
      } else {
        // login sequence to continue prompting
        let promptSequence = (usernameAttempt?: string) => {
          this.authService
            .promptLogin("Authenticate to record.", usernameAttempt)
            .then(
              () => {
                resolve(true);
              },
              (usernameAttempt) => {
                if (usernameAttempt === false) {
                  // user cancelled prompt
                  resolve(false);
                } else {
                  // initiate sequence again
                  promptSequence(usernameAttempt);
                }
              }
            );
        };

        // start login prompt sequence
        // require auth before activating
        promptSequence();
      }
    });
  }

  private _isAuth(): boolean {
    // just get the latest value from BehaviourSubject
    return this.authService.authenticated$.getValue();
  }
}
