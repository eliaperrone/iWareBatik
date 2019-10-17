import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private screenOrientation: ScreenOrientation,
    private statusBar: StatusBar) {
    this.screenOrientation.unlock();
    this.statusBar.styleDefault();
  }

}
