import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'  // convierte este servicio en un singleton
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 100
  },{
    id: uuid(),
    name: 'Goku',
    power: 500
  }]

  onNewCharacter( character: Character ): void {
    // con ... character lo que hago es volcar todas las propiedades del objeto
    // el id lo pongo a ultimo para sobrescribir el id que puede llegar a traer character
    const newCharacter: Character = { ...character, id: uuid()};
    this.characters.push(character);
  }

  onDeleteCharacter(id: string): void {

    this.characters = this.characters.filter( character => character.id !== id);

    // usando indice
    //this.characters.splice(id,1);

    // buscando el id a lo pendejo xd
    // this.characters.forEach( character => {
    //   if(character.id === id){
    //     let index = this.characters.findIndex(d => d. id === id)
    //     this.characters.splice(index,1);
    //   }
    // });
  }

}
