import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NusaTenggaraTimurDetailsPage } from './nusa-tenggara-timur-details.page';

const routes: Routes = [
  {
    path: '',
    component: NusaTenggaraTimurDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NusaTenggaraTimurDetailsPage]
})
export class NusaTenggaraTimurDetailsPageModule {}
