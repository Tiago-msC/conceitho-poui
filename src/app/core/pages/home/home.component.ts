import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logo: string =
    'https://gitlab.conceitho.com/uploads/-/system/appearance/header_logo/1/logo-conceitho-vetor-cmyk.png';

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      link: '/',
      icon: 'po-icon-home',
      shortLabel: 'home',
    },
    {
      label: 'Dynamic Form',
      link: '/dynamicform',
      icon: 'po-icon po-icon-clipboard',
      shortLabel: 'home',
    },
    {
      label: 'NF-e',
      link: '/nf',
      icon: 'po-icon po-icon-sale',
      shortLabel: 'nfe',
    },
  ];
}
