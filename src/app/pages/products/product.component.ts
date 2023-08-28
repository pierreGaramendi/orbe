import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { skeletonItemsArray } from 'src/app/constants/skeleton.constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  skeletonItemsArray = skeletonItemsArray;
  url =
    'https://http2.mlstatic.com/D_NQ_NP_973345-MLA47781591382_102021-V.webp';
  constructor() {}
  ngOnInit() {}
}
