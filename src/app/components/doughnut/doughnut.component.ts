import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'dounhnut-chart',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeDounhnutData(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets:[
        {data: [Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]}
      ]
    }
  }
}
