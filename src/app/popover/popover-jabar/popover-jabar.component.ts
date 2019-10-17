import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-jabar',
  templateUrl: './popover-jabar.component.html',
  styleUrls: ['./popover-jabar.component.scss'],
})
export class PopoverJabarComponent implements OnInit {

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
