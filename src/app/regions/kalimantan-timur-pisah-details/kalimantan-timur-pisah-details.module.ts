import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KalimantanTimurPisahDetailsPage } from './kalimantan-timur-pisah-details.page';

const routes: Routes = [
  {
    path: '',
    component: KalimantanTimurPisahDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KalimantanTimurPisahDetailsPage]
})
export class KalimantanTimurPisahDetailsPageModule {}
