import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { PROVIDERS } from "../player/services";
import { SharedModule } from '../shared/shared.module'
import { RecordComponent } from './components/record.component'

const COMPONENTS: any[] = [
  RecordComponent
]

const routes: Routes = [
  {
    path: '',
    component: RecordComponent
  }
];


@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  exports: [],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RecorderModule {}
