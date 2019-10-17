import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PapuaDetailsPage } from './papua-details.page';

const routes: Routes = [
  {
    path: '',
    component: PapuaDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PapuaDetailsPage]
})
export class PapuaDetailsPageModule {}
