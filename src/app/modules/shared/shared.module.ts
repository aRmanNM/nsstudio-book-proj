import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PIPES } from './pipes'

@NgModule({
  imports: [],
  exports: [...PIPES],
  declarations: [...PIPES],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
