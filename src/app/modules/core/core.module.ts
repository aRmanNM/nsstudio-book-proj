import { NgModule } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { PROVIDERS } from "./services";

@NgModule({
  imports: [NativeScriptModule],
  exports: [NativeScriptModule],
  declarations: [],
  providers: [...PROVIDERS],
})
export class CoreModule {}
