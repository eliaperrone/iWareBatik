import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KalbarDetailsPage } from './kalbar-details.page';

const routes: Routes = [
  {
    path: '',
    component: KalbarDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KalbarDetailsPage]
})
export class KalbarDetailsPageModule {}
