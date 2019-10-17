import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kepri',
  templateUrl: './popover-kepri.component.html',
  styleUrls: ['./popover-kepri.component.scss'],
})
export class PopoverKepriComponent implements OnInit {

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
