import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PROVIDERS } from "../player/services";
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RecorderModule {}
