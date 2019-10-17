import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-filter',
  templateUrl: './popover-filter.component.html',
  styleUrls: ['./popover-filter.component.scss'],
})
export class PopoverFilterComponent implements OnInit {

  constructor(private popoverController: PopoverController) {
    //
  }

  ngOnInit() {
    //
  }

  closePopover() {
    this.popoverController.dismiss();
  }

}
