import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product.component';
import { ChipiModule } from 'src/app/components/chipi/chipi.module';
import { VcardModule } from 'src/app/components/vcard/vcard.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    IonicModule,
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    HeaderModule,
    ChipiModule,
    VcardModule
  ]
})
export class ProductsModule { }
