import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // input nos permite compartir informacion entre componentes
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 200
  }]
  // trunks es el valor por defecto

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDeleteId.emit(id);
  }
}
