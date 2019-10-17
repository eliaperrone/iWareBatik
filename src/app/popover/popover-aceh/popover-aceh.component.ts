import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-aceh',
  templateUrl: './popover-aceh.component.html',
  styleUrls: ['./popover-aceh.component.scss'],
})
export class PopoverAcehComponent implements OnInit {

  constructor(private popoverController: PopoverController) {

  }

  ngOnInit() {
    //
  }

  closePopover() {
    this.popoverController.dismiss();
  }



}
