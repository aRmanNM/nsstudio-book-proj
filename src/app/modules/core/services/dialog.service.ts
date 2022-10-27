import { Injectable } from "@angular/core";
import { Dialogs, PromptOptions } from "@nativescript/core";

@Injectable()
export class DialogService {
  constructor() {}

  alert(msg: string) {
    return Dialogs.alert(msg);
  }

  confirm(msg: string) {
    return Dialogs.confirm(msg);
  }

  prompt(msg: string, defaultText?: string) {
    let options: PromptOptions = {
      message: msg,
      defaultText,
      okButtonText: "OK",
      cancelButtonText: "Cancel",
      theme: 0,
    };

    return Dialogs.prompt(options);
  }

  login(msg: string, userName?: string, password?: string) {
    return Dialogs.login(msg, userName, password);
  }

  action(msg: string, cancelButtonText?: string, actions?: string[]) {
    return Dialogs.action(msg, cancelButtonText, actions);
  }
}
