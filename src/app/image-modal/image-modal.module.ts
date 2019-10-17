import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ImageModalPage } from './image-modal.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

const routes: Routes = [
  {
    path: '',
    component: ImageModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImageModalPage],
  providers: [ScreenOrientation]
})
export class ImageModalPageModule {}
