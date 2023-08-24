import { Component } from '@angular/core';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading: boolean = false;

  readonly customLiterals: PoPageLoginLiterals = {
    welcome: "Aplicação de Desafio",
    loginPlaceholder: 'Insira seu usuário de acesso',
  }

  constructor() {}

  handleLogin(s: any) {
    console.log(s);
  }
}
