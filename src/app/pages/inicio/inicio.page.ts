import { Component, OnInit } from '@angular/core';

interface Componente {
  icon:string;
  name: string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon:'american-footbal',
      name:'Action sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'logo-apple-appstore',
      name:'Alert',
      redirectTo:'/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
