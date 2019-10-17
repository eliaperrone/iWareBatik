import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LampungDetailsPage } from './lampung-details.page';

const routes: Routes = [
  {
    path: '',
    component: LampungDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LampungDetailsPage]
})
export class LampungDetailsPageModule {}
