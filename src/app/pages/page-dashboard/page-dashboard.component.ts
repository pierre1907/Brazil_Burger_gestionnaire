import { Component, OnInit } from '@angular/core';
import {Categories} from "../../shared/services/models/categories";
import {CategorieService} from "../../shared/services/categorie.service";
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {

  isLogin:boolean=false;
  categories:Categories[]=[];
  constructor(private catServ:CategorieService,
              private router:Router,
              private authServ:LoginService) { }

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
    //this.panierServ.getPanier().subscribe(panier=>this.panier=panier);
    this.authServ.isLogin.asObservable().subscribe(isLogin=>this.isLogin=isLogin);
  }
  async onLoadView(idCat:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl("/product/categories/"+idCat);
  }
  onLogout(){
    this.authServ.logout();
    this.authServ.isLogin.next(false);
    this.router.navigateByUrl("/");
  }

}
