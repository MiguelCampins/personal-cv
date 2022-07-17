import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lenguajes: string[] = ["JavaScript","React","Angular","TypeScript","Node.js","PrimeNG"]

  constructor() { }

  ngOnInit(): void {
  }

}
