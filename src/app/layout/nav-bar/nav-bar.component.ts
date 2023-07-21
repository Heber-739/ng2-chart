import { Component } from '@angular/core';

interface MenuItem{
  route: string;
  name:string;
}

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: ['li{cursor:pointer;transition:0.2s all;}']
})
export class NavBarComponent {

  public menuItems:MenuItem[]=[
    {route:'/line-chart', name: 'Lineas'},
    {route:'/bar-chart', name: 'Barras'},
    {route:'/doughnut-chart', name: 'Dona'},
    {route:'/radar-chart', name: 'Radar'},
  ]

}
