import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaliDetailsPage } from './bali-details.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const routes: Routes = [
  {
    path: '',
    component: BaliDetailsPage
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
  declarations: [BaliDetailsPage],
  providers: [ScreenOrientation, File, PhotoViewer, InAppBrowser]
})
export class BaliDetailsPageModule { }
