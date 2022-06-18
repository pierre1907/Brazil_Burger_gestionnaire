import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Products} from "./models/products";

const APIURL=`${environment.api}/products`;
@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  constructor(private http:HttpClient){

  }

  private  URL_API:string=environment.api;
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.URL_API}/products`)
  }

  getProduitsById(id:number):Observable<Products>{
    return this.http.get<Products>(`${APIURL}/${id}`);
  }

  getProduitsByCategorie(id:number):Observable<Products[]>{
    return this.http.get<Products[]>(`${APIURL}?categorieId=${id}`);
  }

  addArticle(products:Products):Observable<Products>{
    return this.http.post<Products>(`${APIURL}`, products);
  }


  private subject$:Subject<string>=new Subject();


}
