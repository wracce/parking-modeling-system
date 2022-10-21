import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';
import { CellType } from '../cell-type';
import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-park-objects',
  templateUrl: './park-objects.component.html',
  styleUrls: ['./park-objects.component.scss']
})
export class ParkObjectsComponent implements OnInit {
  indexOver: number = -1;
  types:CellType[] = [];
  cells:Cell[] = [];
  nameOfIdList:string ="";
  valueListConnectedTo: string[] =[];
  
  panelOpenState = false;

  constructor(private designerService:DesignerService) {}

  ngOnInit(): void {
    this.types = this.designerService.getTypes();
    this.cells = this.designerService.getCells();
    this.nameOfIdList = this.designerService.getNameOfObjsList();
    for (let index = 0; index < this.designerService.getLen(); index++) {
      this.valueListConnectedTo.push(this.designerService.getNameOfGridList()+index);
    }
    console.log(this.valueListConnectedTo);
  }

  drop(event: CdkDragDrop<any>) {
    this.designerService.drop(event);
  }

}
