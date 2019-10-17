import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private screenOrientation : ScreenOrientation) { 
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  close() {
    this.modalController.dismiss();
  }

}
