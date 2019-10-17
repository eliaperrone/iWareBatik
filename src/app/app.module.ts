import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageModalPageModule } from './image-modal/image-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { PopoverBaliComponent } from './popover/popover-bali/popover-bali.component';
import { PopoverAcehComponent } from './popover/popover-aceh/popover-aceh.component';
import { PopoverJakartaComponent } from './popover/popover-jakarta/popover-jakarta.component';
import { PopoverBengkaBelitungComponent } from './popover/popover-bengka-belitung/popover-bengka-belitung.component';
import { PopoverBantenComponent } from './popover/popover-banten/popover-banten.component';
import { PopoverGorontaloComponent } from './popover/popover-gorontalo/popover-gorontalo.component';
import { PopoverBengkuluComponent } from './popover/popover-bengkulu/popover-bengkulu.component';
import { PopoverJabarComponent } from './popover/popover-jabar/popover-jabar.component';
import { PopoverJambiComponent } from './popover/popover-jambi/popover-jambi.component';
import { PopoverJatengComponent } from './popover/popover-jateng/popover-jateng.component';
import { PopoverJatimComponent } from './popover/popover-jatim/popover-jatim.component';
import { PopoverKalbarComponent } from './popover/popover-kalbar/popover-kalbar.component';
import { PopoverKalimantanTimurComponent } from './popover/popover-kalimantan-timur/popover-kalimantan-timur.component';
import { PopoverKalimantanUtaraComponent } from './popover/popover-kalimantan-utara/popover-kalimantan-utara.component';
import { PopoverKalselComponent } from './popover/popover-kalsel/popover-kalsel.component';
import { PopoverKaltengComponent } from './popover/popover-kalteng/popover-kalteng.component';
import { PopoverKepriComponent } from './popover/popover-kepri/popover-kepri.component';
import { PopoverLampungComponent } from './popover/popover-lampung/popover-lampung.component';
import { PopoverMalukuComponent } from './popover/popover-maluku/popover-maluku.component';
import { PopoverMalutComponent } from './popover/popover-malut/popover-malut.component';
import { PopoverNusaTenggaraBaratComponent } from './popover/popover-nusa-tenggara-barat/popover-nusa-tenggara-barat.component';
import { PopoverNusaTenggaraTimurComponent } from './popover/popover-nusa-tenggara-timur/popover-nusa-tenggara-timur.component';
import { PopoverPapuaComponent } from './popover/popover-papua/popover-papua.component';
import { PopoverPabarComponent } from './popover/popover-pabar/popover-pabar.component';
import { PopoverRiauComponent } from './popover/popover-riau/popover-riau.component';
import { PopoverSulbarComponent } from './popover/popover-sulbar/popover-sulbar.component';
import { PopoverSulselComponent } from './popover/popover-sulsel/popover-sulsel.component';
import { PopoverSultengComponent } from './popover/popover-sulteng/popover-sulteng.component';
import { PopoverSultraComponent } from './popover/popover-sultra/popover-sultra.component';
import { PopoverSulutComponent } from './popover/popover-sulut/popover-sulut.component';
import { PopoverSumbarComponent } from './popover/popover-sumbar/popover-sumbar.component';
import { PopoverSumutComponent } from './popover/popover-sumut/popover-sumut.component';
import { PopoverSumselComponent } from './popover/popover-sumsel/popover-sumsel.component';
import { PopoverYogyakartaComponent } from './popover/popover-yogyakarta/popover-yogyakarta.component';
import { PopoverFilterComponent } from './popover/popover-filter/popover-filter.component';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PopoverBaliComponent,
    PopoverAcehComponent,
    PopoverBengkaBelitungComponent,
    PopoverBantenComponent,
    PopoverBengkuluComponent,
    PopoverGorontaloComponent,
    PopoverJabarComponent,
    PopoverJakartaComponent,
    PopoverJambiComponent,
    PopoverJatengComponent,
    PopoverJatimComponent,
    PopoverKalbarComponent,
    PopoverKalimantanTimurComponent,
    PopoverKalimantanUtaraComponent,
    PopoverKalselComponent,
    PopoverKaltengComponent,
    PopoverKepriComponent,
    PopoverLampungComponent,
    PopoverMalukuComponent,
    PopoverMalutComponent,
    PopoverNusaTenggaraBaratComponent,
    PopoverNusaTenggaraTimurComponent,
    PopoverPabarComponent,
    PopoverPapuaComponent,
    PopoverRiauComponent,
    PopoverSulbarComponent,
    PopoverSulselComponent,
    PopoverSultengComponent,
    PopoverSultraComponent,
    PopoverSulutComponent,
    PopoverSumbarComponent,
    PopoverSumutComponent,
    PopoverSumselComponent,
    PopoverYogyakartaComponent,
    PopoverFilterComponent
  ],
  entryComponents: [
    PopoverBaliComponent,
    PopoverAcehComponent,
    PopoverBengkaBelitungComponent,
    PopoverBantenComponent,
    PopoverBengkuluComponent,
    PopoverGorontaloComponent,
    PopoverJabarComponent,
    PopoverJakartaComponent,
    PopoverJambiComponent,
    PopoverJatengComponent,
    PopoverJatimComponent,
    PopoverKalbarComponent,
    PopoverKalimantanTimurComponent,
    PopoverKalimantanUtaraComponent,
    PopoverKalselComponent,
    PopoverKaltengComponent,
    PopoverKepriComponent,
    PopoverLampungComponent,
    PopoverMalukuComponent,
    PopoverMalutComponent,
    PopoverNusaTenggaraBaratComponent,
    PopoverNusaTenggaraTimurComponent,
    PopoverPabarComponent,
    PopoverPapuaComponent,
    PopoverRiauComponent,
    PopoverSulbarComponent,
    PopoverSulselComponent,
    PopoverSultengComponent,
    PopoverSultraComponent,
    PopoverSulutComponent,
    PopoverSumbarComponent,
    PopoverSumutComponent,
    PopoverSumselComponent,
    PopoverYogyakartaComponent,
    PopoverFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ImageModalPageModule
  ],
  providers: [
    HTTP,
    HttpClient,
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
