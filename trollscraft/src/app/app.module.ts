import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { CharactersService } from './services/characters.service';
import { CharacterModule } from './character/character.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BackdropComponent } from './backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    ProgressBarComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    CharacterModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
