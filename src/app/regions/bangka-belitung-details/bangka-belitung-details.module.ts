import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BangkaBelitungDetailsPage } from './bangka-belitung-details.page';

const routes: Routes = [
  {
    path: '',
    component: BangkaBelitungDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BangkaBelitungDetailsPage]
})
export class BangkaBelitungDetailsPageModule {}
