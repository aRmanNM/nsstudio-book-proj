import { Folder, knownFolders } from "@nativescript/core";
import { TNSPlayer } from "nativescript-audio";

import { ITrack } from "./track.model";

export interface ITrackPlayer {
  trackId: number;
  duration: number;
  readonly player: TNSPlayer;
}

export interface IPlayerError {
  trackId: number;
  error: any;
}

export class TrackPlayerModel implements ITrackPlayer {
  public trackId: number;
  public duration: number;

  private _player: TNSPlayer;
  private _completeHandler: (number) => void;
  private _errorHandler: (IPlayerError) => void;

  constructor() {
    this._player = new TNSPlayer();
  }

  public load(
    track: ITrack,
    complete: (number) => void,
    error: (IPlayerError) => void
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      this.trackId = track.id;

      this._completeHandler = complete;
      this._errorHandler = error;

      this._player
        .initFromFile({
          audioFile: this._getFilePath(track.filepath),
          loop: false,
          audioMixing: true, // important!
          completeCallback: this._trackComplete.bind(this),
          errorCallback: this._trackError.bind(this),
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
    let name = parts[parts.length - 1];
    console.log(name);
    let path = parts.splice(1, parts.length - 2).join("/");
    console.log(path);
    let folder: Folder = knownFolders.currentApp().getFolder(path);
    return folder.getFile(name).path;
  }

  private _trackComplete(args: any) {
    this.player.seekTo(0);
    console.log("trackComplete: ", this.trackId);
    if (this._completeHandler) {
      this._completeHandler(this.trackId);
    }
  }

  private _trackError(args: any) {
    let error = args.error;
    console.log("trackError: ", error);
    if (this._errorHandler) {
      this._errorHandler({
        trackId: this.trackId,
        error,
      });
    }
  }
}
