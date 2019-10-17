import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-nusa-tenggara-barat',
  templateUrl: './popover-nusa-tenggara-barat.component.html',
  styleUrls: ['./popover-nusa-tenggara-barat.component.scss'],
})
export class PopoverNusaTenggaraBaratComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

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
