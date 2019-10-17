import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-index-indonesian',
  templateUrl: './index-indonesian.page.html',
  styleUrls: ['./index-indonesian.page.scss'],
})
export class IndexIndonesianPage implements OnInit {

  constructor(private statusBar: StatusBar, private screenOrientation: ScreenOrientation) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
    //
  }

}
