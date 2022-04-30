import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageMenuComponent} from "./pages/articles/page-menu/page-menu.component";
import {PageComplementComponent} from "./pages/articles/page-complement/page-complement.component";
import {PageBurgerComponent} from "./pages/articles/page-burger/page-burger.component";
import {NewArticleComponent} from "./pages/articles/new-article/new-article.component";
import {DetailsCmdClientComponent} from "./composants/details-cmd-client/details-cmd-client.component";
import {PagesCmdClientComponent} from "./pages/pages-cmd-client/pages-cmd-client.component";


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'burgers',
        component: PageBurgerComponent
      },
      {
        path: 'menus',
        component: PageMenuComponent
      },
      {
        path: 'complements',
        component: PageComplementComponent
      },
      {
        path: 'newarticle',
        component: NewArticleComponent
      },
      {
        path: 'cmdclient',
        component: PagesCmdClientComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
