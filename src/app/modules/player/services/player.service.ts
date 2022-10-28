import { Injectable } from "@angular/core";
import { Observable, Subject, interval, map } from "rxjs";
import { CompositionModel, TrackPlayerModel } from "../../core/models";
import { ITrack } from "../../core/models/track.model";

@Injectable()
export class PlayerService {
  public playing$: Subject<boolean> = new Subject();
  public duration$: Subject<number> = new Subject();
  public currentTime$: Observable<number>;

  private _composition: CompositionModel;
  private _playing: boolean;
  private _longestTrack: TrackPlayerModel;
  private _trackPlayers: Array<TrackPlayerModel> = [];

  tracks: Array<ITrack>;

  constructor() {
    this.currentTime$ = interval(1000).pipe(
      map((_) =>
        this._longestTrack ? this._longestTrack.player.currentTime : 0
      )
    );
  }

  public set playing(value: boolean) {
    this._playing = value;
    this.playing$.next(value);
  }

  public get playing(): boolean {
    return this._playing;
  }

  public get composition(): CompositionModel {
    return this._composition;
  }

  public set composition(comp: CompositionModel) {
    this._composition = comp;

    this._resetTrackPlayers();

    let initTrackPlayer = (index: number) => {
      let track = this._composition.tracks[index];
      let trackPlayer = new TrackPlayerModel();
      trackPlayer.load(track).then((_) => {
        this._trackPlayers.push(trackPlayer);
        index++;
        if (index < this._composition.tracks.length) {
          initTrackPlayer(index);
        } else {
          this._updateTotalDuration();
        }
      });
    };

    initTrackPlayer(0);
  }

  public togglePlay() {
    this.playing = !this.playing;
    if (this.playing) {
      this.play();
    } else {
      this.pause();
    }
  }

  public play() {
    for (let t of this._trackPlayers) {
      t.player.play();
    }
  }

  public pause() {
    for (let t of this._trackPlayers) {
      t.player.pause();
    }
  }

  private _updateTotalDuration() {
    let totalDuration = Math.max(...this._trackPlayers.map((t) => t.duration));
    for (let t of this._trackPlayers) {
      if (t.duration === totalDuration) {
        this._longestTrack = t;
        break;
      }
    }

    this.duration$.next(totalDuration);
  }

  private _resetTrackPlayers() {
    for (let t of this._trackPlayers) {
      t.cleanup();
    }

    this._trackPlayers = [];
  }

  // addTrack(track: ITrack): void {
  //   this.tracks.push(track);
  // }

  // removeTrack(track: ITrack): void {
  //   let index = this.tracks.indexOf(track);
  //   this.tracks.splice(index, 1);
  // }

  // reorderTrack(track: ITrack, newIndex: number): void {
  //   let index = this.tracks.indexOf(track);
  //   this.tracks.splice(index, 1);
  //   this.tracks.splice(newIndex, 0, track);
  // }
}
