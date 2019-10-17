import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-yogyakarta',
  templateUrl: './popover-yogyakarta.component.html',
  styleUrls: ['./popover-yogyakarta.component.scss'],
})
export class PopoverYogyakartaComponent implements OnInit {

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
