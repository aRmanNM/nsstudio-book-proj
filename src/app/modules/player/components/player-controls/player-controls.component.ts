import { Component, OnInit } from "@angular/core";
import { LogService } from "~/app/modules/core/services";
import { PlayerService } from "../../services";

@Component({
  selector: "player-controls",
  templateUrl: "player-controls.component.html",
})
export class PlayerControlsComponent implements OnInit {
  public currentTime: number = 0;
  public duration: number = 0;
  public playStatus: string = "Play";

  constructor(
    private logService: LogService,
    private playerService: PlayerService
  ) {}

  ngOnInit() {}

  togglePlay() {
    let playing = !this.playerService.playing;
    this.playerService.playing = playing;
    this.playStatus = playing ? "Stop" : "Play";
  }
}
