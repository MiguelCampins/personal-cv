import { Component, OnInit } from '@angular/core';
import ProyectosJson from '../../assets/proyectos.json'
import { Proyecto } from './interfaces/proyecto.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = ProyectosJson;

  constructor() { }

  ngOnInit(): void {
  }

}
