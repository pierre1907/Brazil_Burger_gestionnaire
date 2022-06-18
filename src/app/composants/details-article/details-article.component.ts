import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../shared/services/produit.service";
import {Products} from "../../shared/services/models/products";

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private productsServ:ProduitService,
    //private photoService: ,

  ) { }

  public products :Products[]=[];
  ngOnInit(): void {
    this.productsServ.getProducts().subscribe(
      products => this.products=products
    )

  }

  mofidierProduit(): void{
    // @ts-ignore
    this.router.navigate(['newarticle', this.productsServ.getProduitsByCategorie()])

  }
}
