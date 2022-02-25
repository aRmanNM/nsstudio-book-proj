import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LogService } from ".";
import { DatabaseService } from "./database.service";

@Injectable()
export class AuthService {
  static CURRENT_USER: any;
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private databaseService: DatabaseService,
    private logService: LogService
  ) {
    this._init();
  }

  private _init() {
    AuthService.CURRENT_USER = this.databaseService.getItem(
      DatabaseService.KEYS.currentUser
    );
    this.logService.debug(`Current user: `, AuthService.CURRENT_USER);
    this._notifyState(AuthService.CURRENT_USER);
  }

  private _notifyState(auth: boolean) {
    this.authenticated$.next(auth);
  }
}
