import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CompositionModel } from "../../core/models";
import { MixerService } from "../services";

@Component({
  selector: "mixer",
  templateUrl: "mixer.component.html",
})
export class MixerComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  public composition: CompositionModel;

  constructor(
    private route: ActivatedRoute,
    private mixerService: MixerService
  ) {}

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit() {
    this._sub = this.route.params.subscribe((params) => {
      for (let comp of this.mixerService.list) {
        if (comp.id === +params["id"]) {
          this.composition = comp;
          break;
        }
      }
    });
  }
}
