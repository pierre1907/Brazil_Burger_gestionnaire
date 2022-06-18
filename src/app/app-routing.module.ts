import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {NewArticleComponent} from "./pages/articles/new-article/new-article.component";
import {PagesCmdClientComponent} from "./pages/pages-cmd-client/pages-cmd-client.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {ApplicationGuardService} from "./shared/services/guard/application-guard.service";


const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'newarticle',
        component: NewArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'newarticle/:id',
        component: NewArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'cmdclient',
        component: PagesCmdClientComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'listarticle',
        component: PageArticleComponent,
        //canActivate: [ApplicationGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
