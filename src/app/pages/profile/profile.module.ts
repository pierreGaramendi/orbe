import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalDataComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, PersonalDataComponent],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    IonicModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
