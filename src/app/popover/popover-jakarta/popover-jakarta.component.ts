import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-jakarta',
  templateUrl: './popover-jakarta.component.html',
  styleUrls: ['./popover-jakarta.component.scss'],
})
export class PopoverJakartaComponent implements OnInit {

  constructor(private popoverController: PopoverController) {

  }

  ngOnInit() {
    //
  }

  closePopover() {
    this.popoverController.dismiss();
  }

}
