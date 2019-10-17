import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverBaliComponent } from '../popover/popover-bali/popover-bali.component';
import { PopoverAcehComponent } from '../popover/popover-aceh/popover-aceh.component';
import { PopoverBengkaBelitungComponent } from '../popover/popover-bengka-belitung/popover-bengka-belitung.component';
import { PopoverJakartaComponent } from '../popover/popover-jakarta/popover-jakarta.component';
import { PopoverBantenComponent } from '../popover/popover-banten/popover-banten.component';
import { PopoverGorontaloComponent } from '../popover/popover-gorontalo/popover-gorontalo.component';
import { PopoverBengkuluComponent } from '../popover/popover-bengkulu/popover-bengkulu.component';
import { PopoverJabarComponent } from '../popover/popover-jabar/popover-jabar.component';
import { PopoverJambiComponent } from '../popover/popover-jambi/popover-jambi.component';
import { PopoverJatengComponent } from '../popover/popover-jateng/popover-jateng.component';
import { PopoverJatimComponent } from '../popover/popover-jatim/popover-jatim.component';
import { PopoverKalbarComponent } from '../popover/popover-kalbar/popover-kalbar.component';
import { PopoverKalimantanTimurComponent } from '../popover/popover-kalimantan-timur/popover-kalimantan-timur.component';
import { PopoverKalimantanUtaraComponent } from '../popover/popover-kalimantan-utara/popover-kalimantan-utara.component';
import { PopoverKalselComponent } from '../popover/popover-kalsel/popover-kalsel.component';
import { PopoverKaltengComponent } from '../popover/popover-kalteng/popover-kalteng.component';
import { PopoverKepriComponent } from '../popover/popover-kepri/popover-kepri.component';
import { PopoverLampungComponent } from '../popover/popover-lampung/popover-lampung.component';
import { PopoverMalukuComponent } from '../popover/popover-maluku/popover-maluku.component';
import { PopoverMalutComponent } from '../popover/popover-malut/popover-malut.component';
import { PopoverNusaTenggaraBaratComponent } from '../popover/popover-nusa-tenggara-barat/popover-nusa-tenggara-barat.component';
import { PopoverNusaTenggaraTimurComponent } from '../popover/popover-nusa-tenggara-timur/popover-nusa-tenggara-timur.component';
import { PopoverPabarComponent } from '../popover/popover-pabar/popover-pabar.component';
import { PopoverPapuaComponent } from '../popover/popover-papua/popover-papua.component';
import { PopoverRiauComponent } from '../popover/popover-riau/popover-riau.component';
import { PopoverSulbarComponent } from '../popover/popover-sulbar/popover-sulbar.component';
import { PopoverSulselComponent } from '../popover/popover-sulsel/popover-sulsel.component';
import { PopoverSultengComponent } from '../popover/popover-sulteng/popover-sulteng.component';
import { PopoverSultraComponent } from '../popover/popover-sultra/popover-sultra.component';
import { PopoverSulutComponent } from '../popover/popover-sulut/popover-sulut.component';
import { PopoverSumbarComponent } from '../popover/popover-sumbar/popover-sumbar.component';
import { PopoverSumselComponent } from '../popover/popover-sumsel/popover-sumsel.component';
import { PopoverSumutComponent } from '../popover/popover-sumut/popover-sumut.component';
import { PopoverYogyakartaComponent } from '../popover/popover-yogyakarta/popover-yogyakarta.component';

@Component({
  selector: 'app-indonesian-map',
  templateUrl: './indonesian-map.page.html',
  styleUrls: ['./indonesian-map.page.scss'],
})

export class IndonesianMapPage implements OnInit {

  public static isAlreadyOpen: boolean = false;
  public static isCopyrightAccepted: boolean = false;

  constructor(private navController: NavController,
    private screenOrientation: ScreenOrientation,
    private statusBar: StatusBar,
    private popoverController: PopoverController) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  // Aceh
  async presentPopoverAceh() {
    const popover = await this.popoverController.create({
      component: PopoverAcehComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Bali
  async presentPopoverBali() {
    const popover = await this.popoverController.create({
      component: PopoverBaliComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Bengka-Belitung
  async presentPopoverBengkaBelitung() {
    const popover = await this.popoverController.create({
      component: PopoverBengkaBelitungComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Banten
  async presentPopoverBanten() {
    const popover = await this.popoverController.create({
      component: PopoverBantenComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Bengkulu
  async presentPopoverBengkulu() {
    const popover = await this.popoverController.create({
      component: PopoverBengkuluComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Gorontalo
  async presentPopoverGorontalo() {
    const popover = await this.popoverController.create({
      component: PopoverGorontaloComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Jabar
  async presentPopoverJabar() {
    const popover = await this.popoverController.create({
      component: PopoverJabarComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Jakarta
  async presentPopoverJakarta() {
    const popover = await this.popoverController.create({
      component: PopoverJakartaComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Jambi
  async presentPopoverJambi() {
    const popover = await this.popoverController.create({
      component: PopoverJambiComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Jateng
  async presentPopoverJateng() {
    const popover = await this.popoverController.create({
      component: PopoverJatengComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Jatim
  async presentPopoverJatim() {
    const popover = await this.popoverController.create({
      component: PopoverJatimComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kalbar
  async presentPopoverKalbar() {
    const popover = await this.popoverController.create({
      component: PopoverKalbarComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kalimantan Timur
  async presentPopoverKalimantanTimur() {
    const popover = await this.popoverController.create({
      component: PopoverKalimantanTimurComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kalimantan Utara
  async presentPopoverKalimantanUtara() {
    const popover = await this.popoverController.create({
      component: PopoverKalimantanUtaraComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kalsel
  async presentPopoverKalsel() {
    const popover = await this.popoverController.create({
      component: PopoverKalselComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kalteng
  async presentPopoverKalteng() {
    const popover = await this.popoverController.create({
      component: PopoverKaltengComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Kepri
  async presentPopoverKepri() {
    const popover = await this.popoverController.create({
      component: PopoverKepriComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Lampung
  async presentPopoverLampung() {
    const popover = await this.popoverController.create({
      component: PopoverLampungComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Maluku
  async presentPopoverMaluku() {
    const popover = await this.popoverController.create({
      component: PopoverMalukuComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Malut
  async presentPopoverMalut() {
    const popover = await this.popoverController.create({
      component: PopoverMalutComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Nusa Tenggara Barat
  async presentPopoverNusaTenggaraBarat() {
    const popover = await this.popoverController.create({
      component: PopoverNusaTenggaraBaratComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Nusa Tenggara Timur
  async presentPopoverNusaTenggaraTimur() {
    const popover = await this.popoverController.create({
      component: PopoverNusaTenggaraTimurComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Pabar
  async presentPopoverPabar() {
    const popover = await this.popoverController.create({
      component: PopoverPabarComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Papua
  async presentPopoverPapua() {
    const popover = await this.popoverController.create({
      component: PopoverPapuaComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Riau
  async presentPopoverRiau() {
    const popover = await this.popoverController.create({
      component: PopoverRiauComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sulbar
  async presentPopoverSulbar() {
    const popover = await this.popoverController.create({
      component: PopoverSulbarComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sulsel
  async presentPopoverSulsel() {
    const popover = await this.popoverController.create({
      component: PopoverSulselComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sulteng
  async presentPopoverSulteng() {
    const popover = await this.popoverController.create({
      component: PopoverSultengComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sultra
  async presentPopoverSultra() {
    const popover = await this.popoverController.create({
      component: PopoverSultraComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sulut
  async presentPopoverSulut() {
    const popover = await this.popoverController.create({
      component: PopoverSulutComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sumbar
  async presentPopoverSumbar() {
    const popover = await this.popoverController.create({
      component: PopoverSumbarComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sumsel
  async presentPopoverSumsel() {
    const popover = await this.popoverController.create({
      component: PopoverSumselComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Sumut
  async presentPopoverSumut() {
    const popover = await this.popoverController.create({
      component: PopoverSumutComponent,
      translucent: true
    });
    return await popover.present();
  }

  // Yogyakarta
  async presentPopoverYogyakarta() {
    const popover = await this.popoverController.create({
      component: PopoverYogyakartaComponent,
      translucent: true
    });
    return await popover.present();
  }
}