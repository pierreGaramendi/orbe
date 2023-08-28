import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'v-card',
  templateUrl: './vcard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcardComponent {}
