import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SumselDetailsPage } from './sumsel-details.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const routes: Routes = [
  {
    path: '',
    component: SumselDetailsPage
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
  declarations: [SumselDetailsPage],
  providers: [ScreenOrientation, InAppBrowser]
})
export class SumselDetailsPageModule {}
