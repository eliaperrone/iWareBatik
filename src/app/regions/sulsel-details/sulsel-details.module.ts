import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SulselDetailsPage } from './sulsel-details.page';

const routes: Routes = [
  {
    path: '',
    component: SulselDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SulselDetailsPage]
})
export class SulselDetailsPageModule {}
