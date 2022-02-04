import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { PROVIDERS } from "./services";

@NgModule({
  imports: [NativeScriptModule],
  exports: [],
  declarations: [],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerModule {}
