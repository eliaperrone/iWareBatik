import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-bengka-belitung',
  templateUrl: './popover-bengka-belitung.component.html',
  styleUrls: ['./popover-bengka-belitung.component.scss'],
})
export class PopoverBengkaBelitungComponent implements OnInit {

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
