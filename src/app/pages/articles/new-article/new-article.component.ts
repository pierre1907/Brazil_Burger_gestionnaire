import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Products} from "../../../shared/services/models/products";
import {Categories} from "../../../shared/services/models/categories";
import {ProduitService} from "../../../shared/services/produit.service";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  nomArticle?: string;
  prix?: number;
  categorie?: string;


  constructor(
    private router: Router,
    private produitServ: ProduitService
  ) { }

  ngOnInit(): void {
  }

  listarticle() {
    this.router.navigate(['listarticle'])
  }


  AjoutArticleAction() {

    let products : Products={
      //id?:number,
      "nom":this.nomArticle,
      //description?:,
      "prix": this?.prix,
      //qteCmde?:number,
      "categorie":this?.categorie,
      //image :string
    };
    alert("Vous êtes sur le point d'ajouter un nouvel article")
    this.produitServ.addArticle(products).subscribe(
      data => {
        console.log(data)
      }
    )
    alert("Produit ajouté avec succes")
    //console.log(produitCree);
  }
}
