import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IndonesianMapPage } from './indonesian-map.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PinchZoomModule } from 'ngx-pinch-zoom';

const routes: Routes = [
  {
    path: '',
    component: IndonesianMapPage
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
  declarations: [IndonesianMapPage],
  providers: [ScreenOrientation]
})
export class IndonesianMapPageModule {}
