import { Component, OnInit } from "@angular/core";
import { MixerService } from "../../services";

@Component({
  selector: "mix-list",
  templateUrl: "mix-list.component.html",
})
export class MixListComponent implements OnInit {
  constructor(public mixerService: MixerService) {}

  ngOnInit() {}
}
