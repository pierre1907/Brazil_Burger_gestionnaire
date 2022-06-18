import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NewArticleComponent } from './pages/articles/new-article/new-article.component';
import { DetailsCmdClientComponent } from './composants/details-cmd-client/details-cmd-client.component';
import { DetailsCmdComponent } from './composants/details-cmd/details-cmd.component';
import { PagesCmdClientComponent } from './pages/pages-cmd-client/pages-cmd-client.component';
import { PageCategorieComponent } from './pages/page-categorie/page-categorie.component';
import { DetailsArticleComponent } from './composants/details-article/details-article.component';
import { environment } from "../environments/environment";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
//angularfire imports
//import { AngularFireModule } from "@angular/fire";
//import { AngularFirestoreModule, provideFirestore,getFirestore } from "@angular/fire/firestore";
//environment import



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NewArticleComponent,
    DetailsCmdClientComponent,
    DetailsCmdComponent,
    PagesCmdClientComponent,
    PageCategorieComponent,
    DetailsArticleComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        CommonModule
    ],

  providers: [
    //ScreenTrackingService,UserTrackingService
  ],
  exports:[

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
