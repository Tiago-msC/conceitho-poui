import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NfcGridComponent } from './nfc-grid.component';

const routes: Routes = [
  { path: '', component: NfcGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfcGridRoutingModule { }
