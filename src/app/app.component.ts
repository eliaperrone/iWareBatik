import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  rootPage:any = 'HomePage';

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private menuController: MenuController, private screenOrientation: ScreenOrientation) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleLightContent();
    this.splashScreen.hide();
    });
  }
  
  closeMenu() {
    this.screenOrientation.unlock();
    this.menuController.close();
  }
}
