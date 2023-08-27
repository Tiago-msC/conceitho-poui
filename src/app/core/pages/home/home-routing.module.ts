import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dynamicform',
        loadChildren: () =>
          import('../dynamicform/dynamicform.module').then(
            (m) => m.DynamicformModule
          ),
      },
      {
        path: 'nf',
        loadChildren: () =>
          import('../nfc-grid/nfc-grid.module').then(
            (m) => m.NfcGridModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
