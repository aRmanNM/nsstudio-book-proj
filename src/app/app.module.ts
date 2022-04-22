import { NgModule } from "@angular/core";

import { CoreModule } from "./modules/core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  declarations: [AppComponent],
  providers: [],
})
export class AppModule {}
