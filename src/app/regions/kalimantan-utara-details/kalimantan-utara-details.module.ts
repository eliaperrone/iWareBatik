import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KalimantanUtaraDetailsPage } from './kalimantan-utara-details.page';

const routes: Routes = [
  {
    path: '',
    component: KalimantanUtaraDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KalimantanUtaraDetailsPage]
})
export class KalimantanUtaraDetailsPageModule {}
