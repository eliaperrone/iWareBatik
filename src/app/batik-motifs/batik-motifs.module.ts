import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BatikMotifsPage } from './batik-motifs.page';

const routes: Routes = [
  {
    path: '',
    component: BatikMotifsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BatikMotifsPage]
})
export class BatikMotifsPageModule {}
