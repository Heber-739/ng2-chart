import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { LinesComponent } from './components/lines/lines.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { RadarComponent } from './components/radar/radar.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
