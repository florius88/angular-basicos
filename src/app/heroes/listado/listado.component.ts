import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
/* export class ListadoComponent implements OnInit {
  
  constructor(){
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

} */

export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('Borrando...');
    // Borra el primer elemento del array y lo retorna
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
