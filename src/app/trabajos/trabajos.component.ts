import { Component, OnInit } from '@angular/core';
import TrabajosJson from '../../assets/trabajos.json';
import { Trabajo } from './interfaces/trabajo.interface';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: Trabajo[] = TrabajosJson;

  constructor() { }

  ngOnInit(): void {
  }

}
