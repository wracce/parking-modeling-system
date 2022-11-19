import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParkingCell } from '../models/parking-cell';
import { ParkingMap } from '../models/parking-map';
import { ParkingState } from '../models/parking-state';
import { ParkingTemplate } from '../models/parking-template';
import { ParkingTemplateGroup } from '../models/parking-template-group';

@Injectable({
  providedIn: 'root',
})
export class DesignerService {
  public indexOver!: number;
  public selectedCells!: number[];

  private linkOfParkingTemplate!: string;
  private linksToParkingCells!: string[];
  private linkOfParkingCell!: string;

  private parkingMap!: ParkingMap;
  private parkingTemplateGroup!: ParkingTemplateGroup;
  private setupParkingForm!: FormGroup;

  constructor() {
    this.indexOver = -1;
    this.selectedCells = [];
    this.linksToParkingCells = [];
    this.parkingMap = new ParkingMap('', 6, 6, 'top', 1);
    this.linkOfParkingCell = 'designerCellList';
    this.linkOfParkingTemplate = 'designerObjsList';
    this.parkingTemplateGroup = new ParkingTemplateGroup();
    this.setupParkingForm = new FormGroup({
      name: new FormControl(this.parkingMap.name),
      cols: new FormControl(this.parkingMap.cols),
      rows: new FormControl(this.parkingMap.rows),
      directOfRoad: new FormControl(this.parkingMap.directOfRoad),
    });
    this.parkingMap.configurateParking();
  }

  public getIndexOver(): Number {
    return this.indexOver;
  }

  public getSelectedCells(): number[] {
    return this.selectedCells;
  }

  public getParkingMap(): ParkingMap {
    return this.parkingMap;
  }
  public getTypes(): ParkingTemplateGroup {
    return this.parkingTemplateGroup;
  }

  public getNameOfGridList(): string {
    return this.linkOfParkingCell;
  }

  public getNameOfObjsList(): string {
    return this.linkOfParkingTemplate;
  }

  public getSetupParkingForm(): FormGroup {
    return this.setupParkingForm;
  }

  public getLinksToParkingCells(): string[] {
    return this.linksToParkingCells;
  }

  public drop(event: CdkDragDrop<any>) {
    
    if (event.previousContainer != event.container) {
      if (event.container.data instanceof ParkingCell) {
        //on board
        if (event.previousContainer.data instanceof ParkingTemplate) {
          // from side to board
          event.container.data.type = event.previousContainer.data;
          if (
            event.previousContainer.data.cols > 1 ||
            event.previousContainer.data.rows > 1
          )
            this.parkingMap.configurateNeighbours(event.container.data);
        } else {
          // from board to board
          event.container.data.type = event.previousContainer.data.type;
          event.previousContainer.data.type = new ParkingTemplate(
            '',
            null,
            ParkingState.Undef,
            0,
            1,
            1
          );
        }
      }
    }
    this.selectedCells.length = 0;
  }

  public move(event: CdkDragMove<any>) {
    console.log(event);
    
    let cell: ParkingCell;
    if (event.source.dropContainer.data instanceof ParkingCell)
      cell = event.source.dropContainer.data;
    else cell = new ParkingCell(event.source.dropContainer.data, -1);

    this.selectedCells = this.parkingMap.getCellPositions(cell, this.indexOver);
  }

  public resetLinksToParkingCells() {
    let links = this.parkingMap
      .getParkingCells()
      .map((cell) => this.linkOfParkingCell + cell.id);
    this.linksToParkingCells.length = 0;
    this.linksToParkingCells.push(...links);
  }
}
