import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SultraDetailsPage } from './sultra-details.page';

const routes: Routes = [
  {
    path: '',
    component: SultraDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SultraDetailsPage]
})
export class SultraDetailsPageModule {}
