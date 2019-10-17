import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JakartaDetailsPage } from './jakarta-details.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PinchZoomModule } from 'ngx-pinch-zoom';

const routes: Routes = [
  {
    path: '',
    component: JakartaDetailsPage
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
  declarations: [JakartaDetailsPage],
  providers: [ScreenOrientation, InAppBrowser]
})
export class JakartaDetailsPageModule { }
