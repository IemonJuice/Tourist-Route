import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { TravelComponent } from './travel.component';
import { TravelRoutingModule } from './travel-routing.module';
import {TabsComponent} from "./core/tabs/tabs.component";

@NgModule({
  declarations: [TravelComponent, TabsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), TravelRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [TravelComponent],
})
export class TravelModule {}
