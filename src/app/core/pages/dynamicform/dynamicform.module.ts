import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicformRoutingModule } from './dynamicform-routing.module';
import { DynamicformComponent } from './dynamicform.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { BasicProtheusServicesService } from 'src/app/shared/services/basic-protheus-services/basic-protheus-services.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicformComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    HttpClientModule,
    DynamicformRoutingModule,
  ],
})
export class DynamicformModule {}
