import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-banten',
  templateUrl: './popover-banten.component.html',
  styleUrls: ['./popover-banten.component.scss'],
})
export class PopoverBantenComponent implements OnInit {

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
