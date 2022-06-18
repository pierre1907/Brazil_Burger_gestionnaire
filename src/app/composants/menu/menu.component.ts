import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";
import {PageLoginComponent} from "../../pages/page-login/page-login.component";
import {CategorieService} from "../../shared/services/categorie.service";
import {LoginService} from "../../shared/services/login.service";
import {Categories} from "../../shared/services/models/categories";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de Bord',
      icon: 'fa fa-chart-pie-simple',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Statistiques',
          icon: 'fa fa-chart-bar',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa fa-burger-soda',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Liste des Articles',
          icon: '',
          url: 'listarticle',
        }
      ]
    },
    {
      id: '3',
      titre: 'Commandes',
      icon: 'fa fa-stack-overflow',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Commandes par client',
          icon: 'fa fa-users',
          url: 'cmdclient',
        },
        {
          id: '32',
          titre: 'Commandes par date',
          icon: 'fa fa-calendar-days',
          url: 'cmddate',
        },
        {
          id: '33',
          titre: 'Commandes par etat',
          icon: '',
          url: 'cmdetat',
        },
        {
          id: '34',
          titre: 'Commandes par Burger/Menu',
          icon: '',
          url: 'cmdburger',
        }
      ]
    }
  ]

  private lastSelectedMenu: Menu | undefined;
  constructor(private catServ:CategorieService,private router:Router,
              private authServ:LoginService) {

  }


  isLogin:boolean=false;
  categories:Categories[]=[];

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);

    this.authServ.isLogin.asObservable().subscribe(isLogin=>this.isLogin=isLogin);
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active=false;
    }
    menu.active= true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
  async onLoadView(idCat:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl("/product/categories/"+idCat);

  }

  onLogout(){
    this.authServ.logout();
    this.authServ.isLogin.next(false);
    this.router.navigateByUrl("/product");
  }
}
