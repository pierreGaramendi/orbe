import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chipi',
  templateUrl: './chipi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipiComponent implements OnInit {
  @Input() label = '-20%';
  constructor() {}

  ngOnInit() {}
}
