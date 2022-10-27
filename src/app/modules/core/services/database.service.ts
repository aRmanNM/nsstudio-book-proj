import { Injectable } from "@angular/core";

import { ApplicationSettings } from "@nativescript/core";

interface IKeys {
  currentUser: string;
  compositions: string;
}

@Injectable()
export class DatabaseService {
  static KEYS: IKeys = {
    currentUser: "current-user",
    compositions: "compositions"
  };

  setItem(key: string, value: any): void {
    ApplicationSettings.setString(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    let item = ApplicationSettings.getString(key);
    if (item) {
      return JSON.parse(item);
    }

    return item;
  }

  removeItem(key: string): void {
    ApplicationSettings.remove(key);
  }
}
