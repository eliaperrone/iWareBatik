import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-batik-around-you',
  templateUrl: './batik-around-you.page.html',
  styleUrls: ['./batik-around-you.page.scss'],
})
export class BatikAroundYouPage implements OnInit {

  constructor(private screenOrientation : ScreenOrientation) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    //
  }

}
