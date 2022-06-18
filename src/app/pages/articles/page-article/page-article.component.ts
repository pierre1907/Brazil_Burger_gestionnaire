import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../../shared/services/produit.service";
import {Products} from "../../../shared/services/models/products";

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private productsServ:ProduitService
  ) { }

  public products :Products[]=[];
  ngOnInit(): void {
    this.productsServ.getProducts().subscribe(
      products => this.products=products
    )

  }

  nouvelArticle(): void{
    this.router.navigate(['newarticle']);
  }

}
