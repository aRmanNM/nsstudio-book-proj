import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "record",
  templateUrl: "record.component.html",
})
export class RecordComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {}

  public back() {
    this.router.back();
  }
}
