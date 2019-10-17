import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SultengDetailsPage } from './sulteng-details.page';

const routes: Routes = [
  {
    path: '',
    component: SultengDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SultengDetailsPage]
})
export class SultengDetailsPageModule {}
