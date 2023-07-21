import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinesComponent } from './components/lines/lines.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import {RadarComponent} from './components/radar/radar.component'

const routes: Routes = [
  {path:'line-chart',component:LinesComponent},
  {path:'bar-chart',component:BarComponent},
  {path:'doughnut-chart',component:DoughnutComponent},
  {path:'radar-chart',component:RadarComponent},
  {path:'**',redirectTo:'line-chart'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
