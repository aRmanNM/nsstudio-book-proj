import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";
import { PIPES } from "./pipes";

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  exports: [NativeScriptCommonModule, NativeScriptRouterModule, ...PIPES],
  declarations: [...PIPES],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
