import { Component, OnInit } from '@angular/core';
import {Users} from "../../shared/services/models/users";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";
import {CommandeService} from "../../shared/services/commande.service";
import {user} from "@angular/fire/auth";


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  //private panier:null|Panier=null;
  model:Users={
    login:"",
    password:""
  };

  page:string="";
  constructor(private route:ActivatedRoute,private authServ:LoginService,
              //private comServ:CommandeService,private panierServ:PanierService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.page=params["page"]);
    //this.panierServ.getPanier().subscribe(panier=>this.panier=panier);
  }

  onFormSubmit(){
    this.authServ.getUserLoginAndPassword(this.model).subscribe(users=>{
      if(this.authServ.isLogin.getValue()){
        console.log(this.authServ.isLogin.getValue())
        this.router.navigateByUrl("listarticle");
      } else {
        alert("Mot de passe ou login faux || Réservez aux gestionnaires")
      }
    })
  }
}
