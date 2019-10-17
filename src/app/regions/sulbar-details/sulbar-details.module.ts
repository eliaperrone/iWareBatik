import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SulbarDetailsPage } from './sulbar-details.page';

const routes: Routes = [
  {
    path: '',
    component: SulbarDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SulbarDetailsPage]
})
export class SulbarDetailsPageModule {}
