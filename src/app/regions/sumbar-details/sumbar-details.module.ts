import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SumbarDetailsPage } from './sumbar-details.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

const routes: Routes = [
  {
    path: '',
    component: SumbarDetailsPage
  }
];

@NgModule({
  imports: [
    PinchZoomModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SumbarDetailsPage],
  providers: [ScreenOrientation, InAppBrowser]
})
export class SumbarDetailsPageModule { }
