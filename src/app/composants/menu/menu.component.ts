import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de Bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: '',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: '',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Burger',
          icon: '',
          url: 'burgers',
        },
        {
          id: '22',
          titre: 'Menu',
          icon: '',
          url: 'menus',
        },
        {
          id: '23',
          titre: 'Complement',
          icon: '',
          url: 'complements',
        }
      ]
    },
    {
      id: '3',
      titre: 'Commandes',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Commandes par client',
          icon: '',
          url: 'cmdclient',
        },
        {
          id: '32',
          titre: 'Commandes par date',
          icon: '',
          url: '',
        },
        {
          id: '33',
          titre: 'Commandes par etat',
          icon: '',
          url: '',
        },
        {
          id: '34',
          titre: 'Commandes par Burger/Menu',
          icon: '',
          url: '',
        }
      ]
    }

  ]


  constructor(
    private  router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
