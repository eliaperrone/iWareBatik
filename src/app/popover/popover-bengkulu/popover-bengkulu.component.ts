import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-bengkulu',
  templateUrl: './popover-bengkulu.component.html',
  styleUrls: ['./popover-bengkulu.component.scss'],
})
export class PopoverBengkuluComponent implements OnInit {

  constructor(private popoverController : PopoverController) { }

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
