import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-jateng',
  templateUrl: './popover-jateng.component.html',
  styleUrls: ['./popover-jateng.component.scss'],
})
export class PopoverJatengComponent implements OnInit {

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
