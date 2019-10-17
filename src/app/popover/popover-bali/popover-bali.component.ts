import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-bali',
  templateUrl: './popover-bali.component.html',
  styleUrls: ['./popover-bali.component.scss'],
})
export class PopoverBaliComponent implements OnInit {

  constructor(private popoverController: PopoverController) {

  }

  ngOnInit() {
    //
  }

  pinPopover() {
    //backdropDismiss: false
  }

  closePopover() {
    this.popoverController.dismiss();
  }
}


