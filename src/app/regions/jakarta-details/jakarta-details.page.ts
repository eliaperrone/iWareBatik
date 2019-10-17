import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { IndonesianMapPage } from 'src/app/indonesian-map/indonesian-map.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-jakarta-details',
  templateUrl: './jakarta-details.page.html',
  styleUrls: ['./jakarta-details.page.scss'],
})
export class JakartaDetailsPage implements OnInit {

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

}
