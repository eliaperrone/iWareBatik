import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kalbar',
  templateUrl: './popover-kalbar.component.html',
  styleUrls: ['./popover-kalbar.component.scss'],
})
export class PopoverKalbarComponent implements OnInit {

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
