import { Injectable } from "@angular/core";
import { CompositionModel, IComposition } from "../../core/models";
import { LogService } from "../../core/services";
import { DatabaseService } from "../../core/services/database.service";
import { DialogService } from "../../core/services/dialog.service";

@Injectable()
export class MixerService {
  public list: Array<IComposition>;
  constructor(
    private databaseService: DatabaseService,
    private dialogService: DialogService
  ) {
    this.list = this._savedCompositions() || this._demoCompositions();
  }

  public add() {
    this.dialogService.prompt("Composition name:").then((value) => {
      if (value.result) {
        let composition = new CompositionModel({
          id: this.list.length + 1,
          name: value.text,
          order: this.list.length,
        });
        this.list.push(composition);
        this._saveList();
      }
    });
  }

  public edit(composition: IComposition) {
    this.dialogService.prompt("Edit name:", composition.name).then((value) => {
      if (value.result) {
        for (let comp of this.list) {
          if (comp.id === composition.id) {
            comp.name = value.text;
            break;
          }
        }
        this.list = [...this.list];
        this._saveList();
      }
    });
  }

  private _saveList() {
    this.databaseService.setItem(DatabaseService.KEYS.compositions, this.list);
  }

  private _savedCompositions(): IComposition[] {
    return this.databaseService.getItem(DatabaseService.KEYS.compositions);
  }

  private _demoCompositions(): IComposition[] {
    return [
      {
        id: 1,
        name: "Demo",
        created: Date.now(),
        order: 0,
        tracks: [
          {
            name: "Guitar",
            order: 0,
            solo: false,
          },
          {
            name: "Vocals",
            order: 1,
            solo: false,
          },
        ],
      },
    ];
  }
}
