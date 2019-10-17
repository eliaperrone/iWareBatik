import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-nusa-tenggara-timur',
  templateUrl: './popover-nusa-tenggara-timur.component.html',
  styleUrls: ['./popover-nusa-tenggara-timur.component.scss'],
})
export class PopoverNusaTenggaraTimurComponent implements OnInit {

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
