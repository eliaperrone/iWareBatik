import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kalteng',
  templateUrl: './popover-kalteng.component.html',
  styleUrls: ['./popover-kalteng.component.scss'],
})
export class PopoverKaltengComponent implements OnInit {

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
