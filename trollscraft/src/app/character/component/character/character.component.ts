import { Component, OnInit, Input } from '@angular/core';

import { CharacterModel } from './../../model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: CharacterModel;
  @Input() animation;
  @Input() width = 100;

  currentPosition = 1;

  constructor() {
  }

  ngOnInit() {
    this.startInterval();
  }

  startInterval () {
    if(this.animation) {
      setInterval(() => { this.generateAnimationIdle() }, 100);
    }
  }

  generateAnimationIdle () {
    if(this.currentPosition === 5) {
      this.currentPosition = 1;
    } else {
      this.currentPosition += 1;
    }
  }

}
