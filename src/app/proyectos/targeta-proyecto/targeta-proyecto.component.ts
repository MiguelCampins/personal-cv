import { Component, Input } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';


@Component({
  selector: 'app-targeta-proyecto',
  templateUrl: './targeta-proyecto.component.html',
  styleUrls: ['./targeta-proyecto.component.css']
})
export class TargetaProyectoComponent {

  @Input() proyecto!: Proyecto;

}
