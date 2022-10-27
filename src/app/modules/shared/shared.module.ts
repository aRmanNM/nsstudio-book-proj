import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { PIPES } from "./pipes";

@NgModule({
  imports: [NativeScriptCommonModule],
  exports: [NativeScriptCommonModule, ...PIPES],
  declarations: [...PIPES],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
