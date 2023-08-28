import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VcardComponent, VcardImgComponent } from './components';

@NgModule({
  declarations: [VcardComponent, VcardImgComponent],
  imports: [CommonModule],
  exports: [VcardComponent, VcardImgComponent],
})
export class VcardModule {}
