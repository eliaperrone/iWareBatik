import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NusaTenggaraBaratDetailsPage } from './nusa-tenggara-barat-details.page';

const routes: Routes = [
  {
    path: '',
    component: NusaTenggaraBaratDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NusaTenggaraBaratDetailsPage]
})
export class NusaTenggaraBaratDetailsPageModule {}
