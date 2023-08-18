import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterPageRoutingModule } from './character-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterModal, CharacterNewModal } from './components';
import { HeaderModule } from 'src/app/components';

@NgModule({
  declarations: [CharacterComponent, CharacterModal, CharacterNewModal],
  imports: [
    IonicModule,
    CommonModule,
    CharacterPageRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
})
export class CharacterModule {}
