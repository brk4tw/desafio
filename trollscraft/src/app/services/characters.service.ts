import { Injectable } from '@angular/core';

import { CharacterModel } from './../character/model/character';

@Injectable()
export class CharactersService {

  characterCurrent: CharacterModel;

  constructor() { }

  setCharacter (character: CharacterModel) {
    this.characterCurrent = character;
  }

  getCharacter () {
    return this.characterCurrent;
  }

}
