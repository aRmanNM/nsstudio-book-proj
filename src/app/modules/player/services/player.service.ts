import { Injectable } from "@angular/core";
import { ITrack } from "../../core/models/track.model";

@Injectable()
export class PlayerService {
  playing: boolean;
  tracks: Array<ITrack>;

  constructor() {
    this.tracks = [];
  }

  play(index: number): void {
    this.playing = true;
  }

  pause(index: number): void {
    this.playing = false;
  }

  addTrack(track: ITrack): void {
    this.tracks.push(track);
  }

  removeTrack(track: ITrack): void {
    let index = this.tracks.indexOf(track);
    this.tracks.splice(index, 1);
  }

  reorderTrack(track: ITrack, newIndex: number): void {
    let index = this.tracks.indexOf(track);
    this.tracks.splice(index, 1);
    this.tracks.splice(newIndex, 0, track);
  }
}
