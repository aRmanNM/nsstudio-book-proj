import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PROVIDERS } from "./services";
import { COMPONENTS } from "./components";

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],

})
export class PlayerModule {}
