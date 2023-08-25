import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  // el public hace que podamos usar los datos de DbzService en todo el main page
  // pero no es una buena practica dejar los atributos en publico
  //  asi que lo ponemos en privado y definimos los get y set
  constructor( private dbzService: DbzService ) {

  }

  get characters(): Character[]{
    // con [...] lo que hacemos es devolver una copia del objeto
    // de esta forma si se modifica, estariamos modificando la copia y no el original
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
