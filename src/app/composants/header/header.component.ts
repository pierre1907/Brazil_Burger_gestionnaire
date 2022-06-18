import { Component, OnInit } from '@angular/core';
import {Categories} from "../../shared/services/models/categories";
import {CategorieService} from "../../shared/services/categorie.service";
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";
import {Products} from "../../shared/services/models/products";
import {Users} from "../../shared/services/models/users";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean=false;
  categories:Categories[]=[];
  user?: Users | null;
  constructor(private catServ:CategorieService,
              private router:Router,
              private authServ:LoginService,
              ) { }


  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
    this.user = this.authServ.getUserStorage();
    this.authServ.isLogin.asObservable().subscribe(isLogin=>this.isLogin=isLogin);
  }

  async onLoadView(idCat:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl("/product/categories/"+idCat);

  }
  onLogout(){
    this.authServ.logout();
    this.authServ.isLogin.next(false);
    this.router.navigateByUrl("/login");
  }




}
