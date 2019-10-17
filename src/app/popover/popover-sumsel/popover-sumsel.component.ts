import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-sumsel',
  templateUrl: './popover-sumsel.component.html',
  styleUrls: ['./popover-sumsel.component.scss'],
})
export class PopoverSumselComponent implements OnInit {

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
