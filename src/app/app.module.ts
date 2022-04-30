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
import { PageBurgerComponent } from './pages/articles/page-burger/page-burger.component';
import { PageComplementComponent } from './pages/articles/page-complement/page-complement.component';
import { PageMenuComponent } from './pages/articles/page-menu/page-menu.component';
import { DetailBurgerComponent } from './composants/detail-burger/detail-burger.component';
import { DetailMenuComponent } from './composants/detail-menu/detail-menu.component';
import { DetailComplementComponent } from './composants/detail-complement/detail-complement.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NewBurgerComponent } from './pages/articles/new-burger/new-burger.component';
import { NewArticleComponent } from './pages/articles/new-article/new-article.component';
import { DetailsCmdClientComponent } from './composants/details-cmd-client/details-cmd-client.component';
import { DetailsCmdComponent } from './composants/details-cmd/details-cmd.component';
import { PagesCmdClientComponent } from './pages/pages-cmd-client/pages-cmd-client.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    PageBurgerComponent,
    PageComplementComponent,
    PageMenuComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    DetailComplementComponent,
    PaginationComponent,
    BouttonActionComponent,
    NewBurgerComponent,
    NewArticleComponent,
    DetailsCmdClientComponent,
    DetailsCmdComponent,
    PagesCmdClientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
