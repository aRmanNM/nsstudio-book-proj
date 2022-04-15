import { NgModule } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { PROVIDERS } from "./services";
import { PIPES } from "./pipes";

@NgModule({
  imports: [NativeScriptModule],
  exports: [...PIPES],
  declarations: [...PIPES],
  providers: [...PROVIDERS],
})
export class CoreModule {}
