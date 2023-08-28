import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'v-card-img',
  templateUrl: './vcard-img.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcardImgComponent {
  @Input() url = '';
}
