import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Categories} from "./models/categories";
import {Observable} from "rxjs";

const APIURL=`${environment.api}/categories`;
@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http:HttpClient) { }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(APIURL);
  }
}
