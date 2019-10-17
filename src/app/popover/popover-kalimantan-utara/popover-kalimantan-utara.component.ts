import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kalimantan-utara',
  templateUrl: './popover-kalimantan-utara.component.html',
  styleUrls: ['./popover-kalimantan-utara.component.scss'],
})
export class PopoverKalimantanUtaraComponent implements OnInit {

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
