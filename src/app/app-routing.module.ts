import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'index-english', loadChildren: './index-english/index-english.module#IndexEnglishPageModule' },
  { path: 'indonesian-map', loadChildren: './indonesian-map/indonesian-map.module#IndonesianMapPageModule' },
  { path: 'index-indonesian', loadChildren: './index-indonesian/index-indonesian.module#IndexIndonesianPageModule' },
  { path: 'bali-details', loadChildren: './regions/bali-details/bali-details.module#BaliDetailsPageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'batik-around-you', loadChildren: './batik-around-you/batik-around-you.module#BatikAroundYouPageModule' },
  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' },
  { path: 'jakarta-details', loadChildren: './regions/jakarta-details/jakarta-details.module#JakartaDetailsPageModule' },
  { path: 'batik-motifs', loadChildren: './batik-motifs/batik-motifs.module#BatikMotifsPageModule' },
  { path: 'aceh-details', loadChildren: './regions/aceh-details/aceh-details.module#AcehDetailsPageModule' },
  { path: 'bangka-belitung-details', loadChildren: './regions/bangka-belitung-details/bangka-belitung-details.module#BangkaBelitungDetailsPageModule' },
  { path: 'banten-details', loadChildren: './regions/banten-details/banten-details.module#BantenDetailsPageModule' },
  { path: 'bengkulu-details', loadChildren: './regions/bengkulu-details/bengkulu-details.module#BengkuluDetailsPageModule' },
  { path: 'gorontalo-details', loadChildren: './regions/gorontalo-details/gorontalo-details.module#GorontaloDetailsPageModule' },
  { path: 'jabar-details', loadChildren: './regions/jabar-details/jabar-details.module#JabarDetailsPageModule' },
  { path: 'jambi-details', loadChildren: './regions/jambi-details/jambi-details.module#JambiDetailsPageModule' },
  { path: 'jateng-details', loadChildren: './regions/jateng-details/jateng-details.module#JatengDetailsPageModule' },
  { path: 'jatim-details', loadChildren: './regions/jatim-details/jatim-details.module#JatimDetailsPageModule' },
  { path: 'kalbar-details', loadChildren: './regions/kalbar-details/kalbar-details.module#KalbarDetailsPageModule' },
  { path: 'kalimantan-timur-pisah-details', loadChildren: './regions/kalimantan-timur-pisah-details/kalimantan-timur-pisah-details.module#KalimantanTimurPisahDetailsPageModule' },
  { path: 'kalimantan-utara-details', loadChildren: './regions/kalimantan-utara-details/kalimantan-utara-details.module#KalimantanUtaraDetailsPageModule' },
  { path: 'kalsel-details', loadChildren: './regions/kalsel-details/kalsel-details.module#KalselDetailsPageModule' },
  { path: 'kalteng-details', loadChildren: './regions/kalteng-details/kalteng-details.module#KaltengDetailsPageModule' },
  { path: 'kepri-details', loadChildren: './regions/kepri-details/kepri-details.module#KepriDetailsPageModule' },
  { path: 'lampung-details', loadChildren: './regions/lampung-details/lampung-details.module#LampungDetailsPageModule' },
  { path: 'maluku-details', loadChildren: './regions/maluku-details/maluku-details.module#MalukuDetailsPageModule' },
  { path: 'malut-details', loadChildren: './regions/malut-details/malut-details.module#MalutDetailsPageModule' },
  { path: 'nusa-tenggara-barat-details', loadChildren: './regions/nusa-tenggara-barat-details/nusa-tenggara-barat-details.module#NusaTenggaraBaratDetailsPageModule' },
  { path: 'nusa-tenggara-timur-details', loadChildren: './regions/nusa-tenggara-timur-details/nusa-tenggara-timur-details.module#NusaTenggaraTimurDetailsPageModule' },
  { path: 'pabar-details', loadChildren: './regions/pabar-details/pabar-details.module#PabarDetailsPageModule' },
  { path: 'papua-details', loadChildren: './regions/papua-details/papua-details.module#PapuaDetailsPageModule' },
  { path: 'riau-details', loadChildren: './regions/riau-details/riau-details.module#RiauDetailsPageModule' },
  { path: 'sulbar-details', loadChildren: './regions/sulbar-details/sulbar-details.module#SulbarDetailsPageModule' },
  { path: 'sulsel-details', loadChildren: './regions/sulsel-details/sulsel-details.module#SulselDetailsPageModule' },
  { path: 'sulteng-details', loadChildren: './regions/sulteng-details/sulteng-details.module#SultengDetailsPageModule' },
  { path: 'sultra-details', loadChildren: './regions/sultra-details/sultra-details.module#SultraDetailsPageModule' },
  { path: 'sulut-details', loadChildren: './regions/sulut-details/sulut-details.module#SulutDetailsPageModule' },
  { path: 'sumbar-details', loadChildren: './regions/sumbar-details/sumbar-details.module#SumbarDetailsPageModule' },
  { path: 'sumsel-details', loadChildren: './regions/sumsel-details/sumsel-details.module#SumselDetailsPageModule' },
  { path: 'sumut-details', loadChildren: './regions/sumut-details/sumut-details.module#SumutDetailsPageModule' },
  { path: 'yogyakarta-details', loadChildren: './regions/yogyakarta-details/yogyakarta-details.module#YogyakartaDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
