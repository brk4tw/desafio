import { Component, OnInit } from '@angular/core';

import { CharacterModel } from './../character/model/character';
import { CharactersService } from './../services/characters.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  archer: CharacterModel;
  knight: CharacterModel;
  mage: CharacterModel;
  troll: CharacterModel;

  showBackdrop: Boolean = false;
  winnerPhrase: string;

  charSelected;

  constructor(private characterService: CharactersService) {
    this.initCharacters();
  }

  initCharacters () {
    this.archer = new CharacterModel();
    this.archer.type = 'archer';

    this.knight = new CharacterModel();
    this.knight.type = 'knight';

    this.mage = new CharacterModel();
    this.mage.type = 'mage';

    this.troll = new CharacterModel();
    this.troll.type = 'troll';
  }

  ngOnInit() {
  }

  selectCharacter (character: CharacterModel, characterType:string) {
    this.charSelected = character;
    this.charSelected.characterType = characterType;
    this.characterService.setCharacter(character);
  }

  hitInCharacter1 () {
    const life = this.charSelected.currentLife - this.troll.basicHit;
    if(life <= 0) {
      this.charSelected.currentLife = 0;
      this.showBackdrop = true;
      this.winnerPhrase = 'O jogador 2 é o vencedor!';
      return;
    } else {
      return this.charSelected.currentLife -= this.troll.basicHit;
    }
  }

  hitInTroll () {
    const life = this.troll.currentLife - this.charSelected.basicHit;
    if(life <= 0) {
      this.troll.currentLife = 0;
      this.showBackdrop = true;   
      this.winnerPhrase = 'O jogador 1 é o vencedor!';   
      return;
    } else {
      return this.troll.currentLife -= this.charSelected.basicHit
    }
  }

  restartGame () {
    this.initCharacters();
    this.charSelected = null;
    this.showBackdrop = false;
  }
  

}
