import { AuthService } from "./auth.service";
import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";

export const PROVIDERS: any[] = [DatabaseService, LogService, AuthService];

export * from "./database.service";
export * from "./log.service";
export * from "./auth.service";
