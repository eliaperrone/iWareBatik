import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-gorontalo',
  templateUrl: './popover-gorontalo.component.html',
  styleUrls: ['./popover-gorontalo.component.scss'],
})
export class PopoverGorontaloComponent implements OnInit {

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
