import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './component/character/character.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CharacterComponent],
  declarations: [CharacterComponent]
})
export class CharacterModule { }
