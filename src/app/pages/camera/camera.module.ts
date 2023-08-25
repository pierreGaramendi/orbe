import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera.component';
import { CameraRoutingModule } from './camera-routing.module';
import { HeaderModule } from 'src/app/components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CameraComponent],
  imports: [
    CommonModule,
    CameraRoutingModule,
    HeaderModule,
    IonicModule
  ]
})
export class CameraModule { }
