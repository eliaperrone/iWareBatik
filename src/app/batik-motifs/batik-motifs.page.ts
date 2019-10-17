import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { LoadingController, NavController, AlertController, PopoverController } from '@ionic/angular';
import { from } from 'rxjs';
import { PopoverFilterComponent } from '../popover/popover-filter/popover-filter.component';

@Component({
  selector: 'app-batik-motifs',
  templateUrl: './batik-motifs.page.html',
  styleUrls: ['./batik-motifs.page.scss'],
})

export class BatikMotifsPage implements OnInit {

  description$: Object;
  searchText: string = '';

  constructor(private dataService: DataService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private popoverController: PopoverController) {
    //
  }

  ngOnInit() {
    from(this.presentLoading()).subscribe(() => {
      this.dataService.getDescription().subscribe((descriptions) => this.description$ = descriptions, (error) => this.presentAlertInternet(), () => this.loadingController.dismiss());
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

  // Aceh
  async presentPopoverFilter(event) {
    const popover = await this.popoverController.create({
      component: PopoverFilterComponent,
      event: event,
      translucent: true
    });
    return await popover.present();
  }

}
