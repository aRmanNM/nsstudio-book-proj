import { Injectable } from "@angular/core";
import * as dialogs from "@nativescript/core/ui/dialogs";

@Injectable()
export class DialogService {
  constructor() {}

  alert(msg: string) {
    return dialogs.alert(msg);
  }

  confirm(msg: string) {
    return dialogs.confirm(msg);
  }

  prompt(msg: string, defaultText?: string) {
    return dialogs.prompt(msg, defaultText);
  }

  login(msg: string, userName?: string, password?: string) {
    return dialogs.login(msg, userName, password);
  }

  action(msg: string, cancelButtonText?: string, actions?: string[]) {
    return dialogs.action(msg, cancelButtonText, actions);
  }
}
