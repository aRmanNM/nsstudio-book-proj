import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/mixer/home",
    pathMatch: "full",
  },
  {
    path: "mixer",
    loadChildren: () =>
      import("./modules/mixer/mixer.module").then((m) => m.MixerModule),
  },
  {
    path: "record",
    loadChildren: () =>
      import("./modules/recorder/recorder.module").then(
        (m) => m.RecorderModule
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
