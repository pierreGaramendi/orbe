import { CommonModule } from '@angular/common';
import { ChipiComponent } from './chipi.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ChipiComponent],
  imports: [CommonModule],
  exports: [ChipiComponent],
})
export class ChipiModule {}
