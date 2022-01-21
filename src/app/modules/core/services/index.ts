import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";

export const PROVIDERS: any[] = [DatabaseService, LogService];

export * from "./database.service";
export * from "./log.service";
