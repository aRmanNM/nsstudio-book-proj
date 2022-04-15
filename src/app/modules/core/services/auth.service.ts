import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LogService } from ".";
import { DatabaseService } from "./database.service";
import { DialogService } from "./dialog.service";

@Injectable()
export class AuthService {
  static CURRENT_USER: any;
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private databaseService: DatabaseService,
    private logService: LogService,
    private dialogService: DialogService
  ) {
    this._init();
  }

  promptLogin(msg: string, username: string = ""): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dialogService.login(msg, username, "").then((input) => {
        if (input.result) {
          if (input.userName && input.userName.indexOf("@") > -1) {
            if (input.password) {
              this._saveUser(input.userName, input.password);
              resolve;
            } else {
              this.dialogService
                .alert("You must provide a password.")
                .then(reject.bind(this, input.userName));
            }
          } else {
            this.dialogService
              .alert("You must provide a valid email address.")
              .then(reject.bind(this, input.userName));
          }
        }
      });
    });
  }

  private _saveUser(username: string, password: string) {
    AuthService.CURRENT_USER = { username, password };
    this.databaseService.setItem(
      DatabaseService.KEYS.currentUser,
      AuthService.CURRENT_USER
    );
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
