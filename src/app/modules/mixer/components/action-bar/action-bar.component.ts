import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "action-bar",
  templateUrl: "action-bar.component.html",
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
