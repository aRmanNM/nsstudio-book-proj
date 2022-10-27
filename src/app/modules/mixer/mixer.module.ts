import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";

import { BaseComponent } from "./components/base.component";
import { MixerComponent } from "./components/mixer.component";
import { MixListComponent } from './components/mix-list/mix-list.component'
import { ActionBarComponent } from "./components/action-bar/action-bar.component";

import { PlayerModule } from "../player/player.module";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SharedModule } from "../shared/shared.module";

import { PROVIDERS } from './services/index';

const COMPONENTS: any[] = [
  BaseComponent,
  MixerComponent,
  MixListComponent,
  ActionBarComponent
]

const routes: Routes = [
  {
    path: "",
    component: BaseComponent,
    children: [
      {
        path: "home",
        component: MixListComponent,
      },
      {
        path: ":id",
        component: MixerComponent
      }
    ],
  },
];

@NgModule({
  imports: [PlayerModule, SharedModule, NativeScriptRouterModule.forChild(routes)],
  exports: [],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MixerModule {}
