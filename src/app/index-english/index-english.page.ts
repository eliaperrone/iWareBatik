import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-index-english',
  templateUrl: './index-english.page.html',
  styleUrls: ['./index-english.page.scss'],
})

export class IndexEnglishPage implements OnInit {

  @ViewChild('Slides1') slider1: IonSlides;
  @ViewChild('Slides2') slider2: IonSlides;

  public base64Image: string;
  private isRunning: boolean = false;
  private region: string;

  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    observeSlideChilden: true,
  };

  imagesIndonesia = ['home_component/indonesia/indonesia1', 'home_component/indonesia/indonesia2', 'home_component/indonesia/indonesia3', 'home_component/indonesia/indonesia4', 'home_component/indonesia/indonesia5', 'home_component/indonesia/indonesia6', 'home_component/indonesia/indonesia7', 'home_component/indonesia/indonesia8', 'home_component/indonesia/indonesia9', 'home_component/indonesia/indonesia10'];
  imagesMotifs = ['home_component/batik/motifs1', 'home_component/batik/motifs2', 'home_component/batik/motifs3', 'home_component/batik/motifs4', 'home_component/batik/motifs5', 'home_component/batik/motifs6', 'home_component/batik/motifs7', 'home_component/batik/motifs8', 'home_component/batik/motifs9', 'home_component/batik/motifs10'];

  pageRegions = ['/aceh-details', '/bali-details', '/bangka-belitung-details', '/banten-details', '/bengkulu-details', '/gorontalo-details', '/jabar-details', '/jakarta-details',
    '/jambi-details', '/jateng-details', '/jatim-details', '/kalbar-details', '/kalimantan-timur-pisah-deatils', '/kalimantan-utara-details', '/kalsel-details', '/kalteng-details',
    '/kepri-details', '/lampung-details', '/maluku-details', '/malut-details', '/nusa-tenggara-barat-details', '/nusa-tenggara-timur-details', '/pabar-details', '/papua-details',
    '/riau-details', '/sulbar-details', '/sulsel-details', '/sulteng-details', '/sultra-details', '/sulut-details', '/sumbar-details', '/sumsel-details', '/sumut-details', '/yogyakarta-details'];

  constructor(private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private streamingMedia: StreamingMedia,
    private camera: Camera,
    private navController: NavController) {
    this.statusBar.styleDefault();
  }

  ngOnInit() {
    //
  }

  playVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('https://www.youtube.com/watch?v=wylWYSHkzoQ&t=', options);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  // Ricerca numero casuale fra due estermi compresi 
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async spin() {
    if (!this.isRunning) {
      this.isRunning = true;
      document.getElementById("spinning-wheel").classList.add("spin");
      await this.sleep(5300).then(() => {
        let rand = this.getRandomInt(0, this.pageRegions.length - 1);
        this.writeRegion(this.pageRegions[rand]);
        this.region = this.pageRegions[rand];

        // Reset animation
        let element = document.getElementById("spinning-wheel");
        element.addEventListener("click", function (e) {
          e.preventDefault;
          element.classList.remove("spin");
          void element.offsetWidth;
          element.classList.add("spin");
        }, false);
      })
    }
    this.isRunning = false;
  }

  linkToRegion() {
    if (this.region != undefined) {
      this.navController.navigateForward(this.region);
      // svuotare l'input
    }
  }

  disabledTapHere() {
    document.getElementById("tap-here").style.visibility = "hidden";
    this.spin();
  }

  writeRegion(pageRegions) {
    switch (pageRegions) {
      case '/aceh-details':
        document.getElementById('input').innerHTML = "Aceh";
        break;
      case '/bali-details':
        document.getElementById('input').innerHTML = "Bali";
        break;
      case '/bangka-belitung-details':
        document.getElementById('input').innerHTML = "Bangka Belitung";
        break;
      case '/banten-details':
        document.getElementById('input').innerHTML = "Banten";
        break;
      case '/bengkulu-details':
        document.getElementById('input').innerHTML = "Bengkulu";
        break;
      case '/gorontalo-details':
        document.getElementById('input').innerHTML = "Gorontalo";
        break;
      case '/jabar-details':
        document.getElementById('input').innerHTML = "West Jawa";
        break;
      case '/jakarta-details':
        document.getElementById('input').innerHTML = "Jakarta";
        break;
      case '/jambi-details':
        document.getElementById('input').innerHTML = "Jambi";
        break;
      case '/jateng-details':
        document.getElementById('input').innerHTML = "Center Jawa";
        break;
      case '/jatim-details':
        document.getElementById('input').innerHTML = "East Jawa";
        break;
      case '/kalbar-details':
        document.getElementById('input').innerHTML = "West Kalimantan";
        break;
      case '/kalimantan-timur-pisah-deatils':
        document.getElementById('input').innerHTML = "East Kalimantan";
        break;
      case '/kalimantan-utara-details':
        document.getElementById('input').innerHTML = "North Kalimantan";
        break;
      case '/kalsel-details':
        document.getElementById('input').innerHTML = "South Kalimantan";
        break;
      case '/kalteng-details':
        document.getElementById('input').innerHTML = "Center Kalimantan";
        break;
      case '/kepri-details':
        document.getElementById('input').innerHTML = "Kepri";
        break;
      case '/lampung-details':
        document.getElementById('input').innerHTML = "Lampung";
        break;
      case '/maluku-details':
        document.getElementById('input').innerHTML = "Maluku";
        break;
      case '/malut-details':
        document.getElementById('input').innerHTML = "North Maluku";
        break;
      case '/nusa-tenggara-barat-details':
        document.getElementById('input').innerHTML = "Southwest Nusa";
        break;
      case '/nusa-tenggara-timur-details':
        document.getElementById('input').innerHTML = "Southeast Nusa";
        break;
      case '/pabar-details':
        document.getElementById('input').innerHTML = "West Papua";
        break;
      case '/papua-details':
        document.getElementById('input').innerHTML = "Papua";
        break;
      case 'riau-details':
        document.getElementById('input').innerHTML = "Riau";
        break;
      case '/sulbar-details':
        document.getElementById('input').innerHTML = "West Sulawesi";
        break;
      case '/sulsel-details':
        document.getElementById('input').innerHTML = "South Sulawesi";
        break;
      case '/sulteng-details':
        document.getElementById('input').innerHTML = "Center Sulawesi";
        break;
      case '/sultra-details':
        document.getElementById('input').innerHTML = "Southeast Sulawesi ";
        break;
      case '/sulut-details':
        document.getElementById('input').innerHTML = "North Sulawesi";
        break;
      case '/sumbar-details':
        document.getElementById('input').innerHTML = "West Sumatra";
        break;
      case '/sumsel-details':
        document.getElementById('input').innerHTML = "South Sumatra";
        break;
      case '/sumut-details':
        document.getElementById('input').innerHTML = "North Sumatra";
        break;
      case '/yogyakarta-details':
        document.getElementById('input').innerHTML = "Yogyakarta";
        break;
    }
  }

  slidesDidLoad1() {
    this.slider1.startAutoplay();
  }

  slidesDidLoad2() {
    this.slider2.startAutoplay();
  }

}
