import { Folder, knownFolders } from "@nativescript/core";
import { TNSPlayer } from "nativescript-audio";

import { ITrack } from "./track.model";

export interface ITrackPlayer {
  trackId: number;
  duration: number;
  readonly player: TNSPlayer;
}

export class TrackPlayerModel implements ITrackPlayer {
  public trackId: number;
  public duration: number;
  private _player: TNSPlayer;

  constructor() {
    this._player = new TNSPlayer();
  }

  public load(track: ITrack): Promise<number> {
    return new Promise((resolve, reject) => {
      this.trackId = track.id;

      this._player
        .initFromFile({
          audioFile: this._getFilePath(track.filepath),
          loop: false,
          audioMixing: true, // important!
        })
        .then(() => {
          this._player.getAudioTrackDuration().then((duration) => {
            this.duration = +duration;
            resolve(+duration);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  public cleanup() {
    this._player.dispose();
  }

  public get player(): TNSPlayer {
    return this._player;
  }

  private _getFilePath(filePath: string) {
    let parts = filePath.split("/");
    let name = parts[parts.length-1];
    console.log(name);
    let path = parts.splice(1, parts.length - 2).join("/");
    console.log(path);
    let folder: Folder = knownFolders.currentApp().getFolder(path);
    return folder.getFile(name).path;
  }
}
