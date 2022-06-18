import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Commandes} from "./models/commandes";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

const APIURL=`${environment.api}/commandes`;
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient,
              private authServ:LoginService) { }


  /*
  listCommande():Observable<Commandes>{
    const commande:Commandes={
      mntTotal: 0,
      products: [],
      date:new Date().toLocaleDateString().split("/").join("-"),
      //mntTotal:panier.total,
      isPayed:false,
      isLivred:false,
      clientId:this.authServ.getUserStorage()==null?0:this.authServ.getUserStorage()?.id,
      client : this.authServ.getUserStorage()
      //products :panier.products
    }
    console.log(JSON.stringify(commande));
    return this.http.post<Commandes>(APIURL,commande);
  }*/

  getCommandes():Observable<Commandes[]>{
    return this.http.get<Commandes[]>(APIURL);
  }

  getCommandesByClient(idClient:number):Observable<Commandes[]>{
    return this.http.get<Commandes[]>(`${APIURL}?clientId=${idClient}`);
  }

  getCommandeById(idCom:number):Observable<Commandes>{
    return this.http.get<Commandes>(`${APIURL}/${idCom}`);
  }

  getCommandeByDate(date:number):Observable<Commandes>{
    return this.http.get<Commandes>(`${APIURL}/${date}`);
  }

  getCommandeByEtat(etat:string):Observable<Commandes>{
    return this.http.get<Commandes>(`${APIURL}/${etat}`);
  }



  updateCommande(commande:Commandes):Observable<Commandes>{
    return this.http.put<Commandes>(`${APIURL}/${commande.id}`,commande);
  }
}
