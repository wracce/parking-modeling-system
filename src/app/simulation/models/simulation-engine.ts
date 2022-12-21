import { interval, Observable } from 'rxjs';
import { SimulationService } from '../services/simulation.service';
import { Car } from './car';

export class SimulationEngine {
  private timeId!: NodeJS.Timer;
  private isStart!: boolean;
  private timeDelay!: number;

  public cars!: Car[];

  constructor(public simulationService:SimulationService) {
    this.cars = [];
  }

  public init(timeDelay: number) {
    this.isStart = true;
    this.timeDelay = timeDelay;

    this.cars.length = 0;
    this.cars.push(new Car(-30,0,0,this.simulationService.carTemplates[0]));
  }

  public async run() {
    this.timeId = setInterval(() => this.step(), this.timeDelay);
  }

  public stop() {
    clearInterval(this.timeId);
  }

  private step() {
    console.log("GI");
    
  }
}
