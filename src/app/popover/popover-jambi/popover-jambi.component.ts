import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-jambi',
  templateUrl: './popover-jambi.component.html',
  styleUrls: ['./popover-jambi.component.scss'],
})
export class PopoverJambiComponent implements OnInit {

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
