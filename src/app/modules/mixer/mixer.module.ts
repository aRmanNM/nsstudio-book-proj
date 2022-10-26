import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";

import { BaseComponent } from "./components/base.component";
import { MixerComponent } from "./components/mixer.component";

import { PlayerModule } from "../player/player.module";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SharedModule } from "../shared/shared.module";

const COMPONENTS: any[] = [
  BaseComponent,
  MixerComponent
]

const routes: Routes = [
  {
    path: "",
    component: BaseComponent,
    children: [
      {
        path: "home",
        component: MixerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [PlayerModule, SharedModule, NativeScriptRouterModule.forChild(routes)],
  exports: [],
  declarations: [...COMPONENTS],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MixerModule {}
