import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajosMenu: MenuItem[] = [
    {
      texto: 'Ilutec',
      ruta: './trabajos/ilutec'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
