import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // esto lo sigo usando?
  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character);

    // debugger;

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = {id: uuid(), name: '', power: 0};
  }
}
