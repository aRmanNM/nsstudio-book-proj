import { AuthService } from "./auth.service";
import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";
import { DialogService } from "./dialog.service";

export const PROVIDERS: any[] = [
  DatabaseService,
  LogService,
  AuthService,
  DialogService,
];

export * from "./database.service";
export * from "./log.service";
export * from "./auth.service";
export * from "./dialog.service";
