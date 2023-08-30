import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NfcGridRoutingModule } from './nfc-grid-routing.module';
import { NfcGridComponent } from './nfc-grid.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    NfcGridComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    HttpClientModule,
    PoPageDynamicSearchModule,
    NfcGridRoutingModule
  ]
})
export class NfcGridModule { }
