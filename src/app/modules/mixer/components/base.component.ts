import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mixer-base",
  template: `<router-outlet></router-outlet>`,
})
export class BaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
