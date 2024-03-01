import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExplorePageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
