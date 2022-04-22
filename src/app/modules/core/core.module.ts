import { NgModule, Optional, SkipSelf } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { PROVIDERS } from "./services";

const MODULES: any[] = [
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [],
  providers: [...PROVIDERS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
