import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kalimantan-timur',
  templateUrl: './popover-kalimantan-timur.component.html',
  styleUrls: ['./popover-kalimantan-timur.component.scss'],
})
export class PopoverKalimantanTimurComponent implements OnInit {

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
