import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { CoreModule } from "../core/core.module";
import { PROVIDERS } from "./services";

import { TrackListComponent } from "./components/track-list/track-list.component";
import { PlayerControlsComponent } from "./components/player-controls/player-controls.component";

@NgModule({
  imports: [NativeScriptModule, CoreModule],
  exports: [],
  declarations: [TrackListComponent, PlayerControlsComponent],
  providers: [...PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerModule {}
