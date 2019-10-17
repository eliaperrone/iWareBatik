import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GorontaloDetailsPage } from './gorontalo-details.page';

const routes: Routes = [
  {
    path: '',
    component: GorontaloDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GorontaloDetailsPage]
})
export class GorontaloDetailsPageModule {}
