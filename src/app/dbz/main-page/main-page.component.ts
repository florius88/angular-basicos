import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1110
  }

/*   get personajes(): Personaje[] {
    return this.dbzService.personajes;
  } */

/*   agregarNuevoPersonaje( argumento: Personaje ) {
    // debugger;
    console.log(argumento);
    this.personajes.push(argumento);
  } */

  // Inyeccion de dependencias
  constructor(private dbzService: DbzService) {
  }

}
