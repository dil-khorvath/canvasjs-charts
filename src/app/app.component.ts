import { Component } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(cw: ChartService) {
    this.charts = cw.getCharts();
    console.log(this.charts);
  }

  public charts;
  public selectedChart: any = "";

}
