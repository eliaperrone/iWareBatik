import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-lampung',
  templateUrl: './popover-lampung.component.html',
  styleUrls: ['./popover-lampung.component.scss'],
})
export class PopoverLampungComponent implements OnInit {

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
