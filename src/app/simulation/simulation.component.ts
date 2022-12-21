import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DesignerParkingComponent } from '../designer/components/designer-parking/designer-parking.component';
import { DesignerService } from '../designer/services/designer.service';
import { SimulationProcessViewComponent } from './components/simulation-process-view/simulation-process-view.component';
import { SimulationService } from './services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  @ViewChild(SimulationProcessViewComponent)
  public simulationProcessComponent!: SimulationProcessViewComponent;

  selectedId: number = 0;

  displayedColumns = ['position', 'timeIn', 'timeOut', 'cost'];
  dataSource = ELEMENT_DATA;

  constructor(public simulationService:SimulationService){}

  public selectionChange(event: StepperSelectionEvent): void {
    if (event.previouslySelectedIndex === (0 &&1)) {

      //this.designerService.getParkingMap().configurateParking(this.designerService.getSetupParkingForm());
      //this.designerService.resetLinksToParkingCells();
      this.simulationProcessComponent.zoomFree();

    }
      if (event.previouslySelectedIndex === 1 && event.selectedIndex === 2) {
      //this.onClickFileInputButton();
    }
  }

  ngOnInit(){}

  public startSimulation() {
    this.simulationService.simulationEngine.init(1000);
    this.simulationService.simulationEngine.run();
  }

  public pauseSimulation() {

  }

  public stopSimulation() {
    this.simulationService.simulationEngine.stop();
  }

}

export const ELEMENT_DATA: Object[] = [
  {position: 1, timeIn: '12:00', timeOut: '12:05', cost: 2500},

]
