import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./user/storage.service";
import {Users} from "./models/users";

const APIURL=`${environment.api}/users`;
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  private  URL_API:string=environment.api;

  constructor(private http:HttpClient,
              private stoServ:StorageService) { }

  getUserLoginAndPassword(user:Users):Observable<Users[]>{
    const user$= this.http.get<Users[]>(`${APIURL}?login=${user.login}&password=${user.password}`);
    user$.subscribe(users=>{
      if(users.length>0){
        let personne = users[0];
        if ("gestionnaire" == personne.role){
          this.stoServ.saveUser(users[0]);
          this.isLogin.next(true);
        }else{
          this.isLogin.next(false);
        }
      }
    })
    return user$;
  }

  logout(){
    this.stoServ.removeUser();
  }

  addUser(user:Users):Observable<Users>{
    return this.http.post<Users>(`${APIURL}`,user);
  }

  getUserStorage():Users|null{
    return this.stoServ.getUser();
  }
}
