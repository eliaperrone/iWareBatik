import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KepriDetailsPage } from './kepri-details.page';

const routes: Routes = [
  {
    path: '',
    component: KepriDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KepriDetailsPage]
})
export class KepriDetailsPageModule {}
