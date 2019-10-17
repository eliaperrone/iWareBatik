import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import { AlertController } from '@ionic/angular';
import { IndonesianMapPage } from 'src/app/indonesian-map/indonesian-map.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DataService } from 'src/app/service/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sumsel-details',
  templateUrl: './sumsel-details.page.html',
  styleUrls: ['./sumsel-details.page.scss'],
})
export class SumselDetailsPage implements OnInit {

  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20
  };

  description$: Object;

  constructor(private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private modalController: ModalController,
    private alertController: AlertController,
    private dataService: DataService,
    private loadingController: LoadingController) {
    this.statusBar.styleDefault();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    from(this.presentLoading()).subscribe(() => {
      this.dataService.getSouthSumatraDescription().subscribe(descriptions => this.description$ = descriptions, (error) => this.presentAlertInternet(), () => this.loadingController.dismiss());
    });
  }

  async presentLoading() {
    const loadingElement = await this.loadingController.create({
      spinner: 'dots'
    });
    return await loadingElement.present();
  }

  async presentAlertInternet() {
    const alert = await this.alertController.create({
      header: 'Please check your internet connection.',
      message: 'The app tried to retrieve data from the website but failed. Make sure you have an internet connection',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Please if you want to see the image you have to accept copyright request',
      message: ' The informations in this application is protected and managed by UNESCO so it\'s treatment is strictly reserved. If you \'Agree\' you are responsible for the forbidden sharing.',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            IndonesianMapPage.isCopyrightAccepted = false;
          }
        }, {
          text: 'Agree',
          handler: () => {
            IndonesianMapPage.isCopyrightAccepted = true;
          }
        }
      ]
    });
    await alert.present();
  }

  openPreview(img, title, description) {
    if (!IndonesianMapPage.isAlreadyOpen || !IndonesianMapPage.isCopyrightAccepted) {
      this.presentAlertConfirm();
      IndonesianMapPage.isAlreadyOpen = true;
    }
    if (IndonesianMapPage.isCopyrightAccepted) {
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: img,
          title: title,
          description: description
        }
      }).then(modal => modal.present());
    }
  }

}
