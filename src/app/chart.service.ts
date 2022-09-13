import { Injectable } from '@angular/core';
import { Charts } from 'src/assets/chart-enum';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getCharts() {
    return Charts;
  }



}
