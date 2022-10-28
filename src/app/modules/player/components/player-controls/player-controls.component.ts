import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CompositionModel } from "~/app/modules/core/models";
import { LogService } from "~/app/modules/core/services";
import { PlayerService } from "../../services";

@Component({
  selector: "player-controls",
  templateUrl: "player-controls.component.html",
})
export class PlayerControlsComponent implements OnInit, OnDestroy {
  @Input() composition: CompositionModel;

  public currentTime: number = 0;
  public duration: number = 0;
  public playStatus: string = "Play";

  private _subPlaying: Subscription;
  private _subDuration: Subscription;
  private _subCurrentTime: Subscription;

  constructor(
    private logService: LogService,
    private playerService: PlayerService
  ) {}

  ngOnDestroy() {
    if (this._subCurrentTime) {
      this._subCurrentTime.unsubscribe();
    }

    if (this._subDuration) {
      this._subDuration.unsubscribe();
    }

    if (this._subPlaying) {
      this._subPlaying.unsubscribe();
    }
  }

  ngOnInit() {
    this.playerService.composition = this.composition;
    this._subPlaying = this.playerService.playing$.subscribe(
      (playing: boolean) => {
        this._updateStatus(playing);
        if (playing) {
          this._subCurrentTime = this.playerService.currentTime$.subscribe(
            (currentTime: number) => {
              this.currentTime = currentTime;
            }
          );
        } else if (this._subCurrentTime) {
          this._subCurrentTime.unsubscribe();
        }

        this._subDuration = this.playerService.duration$.subscribe(
          (duration: number) => {
            this.duration = duration;
          }
        );
      }
    );
  }

  private _updateStatus(playing: boolean) {
    this.playStatus = playing ? "Stop" : "Play";
  }

  public togglePlay() {
    this.playerService.togglePlay();
  }
}
