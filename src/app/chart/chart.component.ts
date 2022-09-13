import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  chartType: any;
  chartInstance: any;

  chartOptions: any = {
    animationEnabled: true,
    title: {
      text: "Project Cost Breakdown"
    },
    data: [{
      type: "bar",
      yValueFormatString: "#,###.##'%'",
      indexLabel: "{name}",
      dataPoints: [
        { y: 28, name: "Labour" },
        { y: 10, name: "Legal" },
        { y: 20, name: "Production" },
        { y: 15, name: "License" },
        { y: 23, name: "Facilities" },
        { y: 17, name: "Taxes" },
        { y: 12, name: "Insurance" }
      ]
    }]
  }

  getChartInstance(event: any) {
    this.chartInstance = event;
  }

  @Input()
  public set setChartType(val: any) {
    console.log(`Received: ${val}`);
    if (!val) return;
    if (!this.chartInstance) return;

    this.chartType = val;
    this.chartOptions.data[0].type = this.chartType;
    this.chartOptions.title.text = this.chartType;
    this.chartInstance.render();
  }



}
