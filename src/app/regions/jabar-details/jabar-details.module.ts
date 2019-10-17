import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JabarDetailsPage } from './jabar-details.page';

const routes: Routes = [
  {
    path: '',
    component: JabarDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JabarDetailsPage]
})
export class JabarDetailsPageModule {}
