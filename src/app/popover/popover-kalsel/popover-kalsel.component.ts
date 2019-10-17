import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-kalsel',
  templateUrl: './popover-kalsel.component.html',
  styleUrls: ['./popover-kalsel.component.scss'],
})
export class PopoverKalselComponent implements OnInit {

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
