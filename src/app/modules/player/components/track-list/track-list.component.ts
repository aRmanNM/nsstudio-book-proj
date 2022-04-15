import { Component, OnInit } from "@angular/core";
import { ITrack } from "~/app/modules/core/models/track.model";
import {
  AuthService,
  DialogService,
  LogService,
} from "~/app/modules/core/services";
import { PlayerService } from "../../services";

@Component({
  selector: "track-list",
  templateUrl: "track-list.component.html",
})
export class TrackListComponent implements OnInit {
  constructor(
    private logService: LogService,
    public playerService: PlayerService,
    private dialogService: DialogService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  record(track: ITrack, usernameAttempt?: string) {
    if (AuthService.CURRENT_USER) {
      this.dialogService
        .confirm("Are u sure u want to re-record this track?")
        .then((ok) => {
          if (ok) this._navToRecord(track);
        });
    } else {
      this.authService
        .promptLogin(
          "Provide an email and password to record.",
          usernameAttempt
        )
        .then(this._navToRecord.bind(this, track), (usernameAttempt) => {
          // initiate sequence again
          this.record(track, usernameAttempt);
        });
    }
  }

  private _navToRecord(track: ITrack) {
    // TODO: navigate to record screen
    this.logService.debug("yes, re-record", track);
  }
}
