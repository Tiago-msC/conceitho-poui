import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-nfc-grid',
  templateUrl: './nfc-grid.component.html',
  styleUrls: ['./nfc-grid.component.scss'],
})
export class NfcGridComponent implements OnInit, OnDestroy {
  readonly apiUrl: string = 'https://db31-191-209-30-228.ngrok-free.app/nfa0019001';

  loading: boolean = false;

  columns = [
    {
      property: 'chnfe',
      label: 'Chave da NF-e',
      align: 'right',
      readonly: true,
      freeze: true,
      width: 130,
    },
    {
      property: 'ide_natop',
      label: 'Natureza da Operação',
      width: 250,
      required: true,
    },
    {
      property: 'ide_demi',
      label: 'Data de Emissão',
    },
    {
      property: 'ide_dsaient',
      label: 'Data de S/E da Mercadoria',
    },
    {
      property: 'emit_xnome',
      label: 'Nome da Empresa Emissora',
      align: 'center',
      // width: 140,
    },
    {
      property: 'emit_xfant',
      label: 'Nome Fantasia da Empresa Emissora',
      align: 'center',
      // width: 200,
    },
    {
      property: 'dest_xnome',
      label: 'Nome do Destinatário',
      align: 'center',
    },
    {
      property: 'icmstot_vnf',
      label: 'Valor Total da Nota Fiscal',
      align: 'center',
    },
    {
      property: 'transp_modfrete',
      label: 'Modal de Frete Utilizado',
      align: 'center',
    },
    {
      property: 'dhrecbto',
      label: 'Data e Hora do Recebimento',
      align: 'center',
    },
  ];

  data = [];

  constructor(private http: HttpClient, public poNotification: PoNotificationService) {}
  
  ngOnInit() {
    this.loading = true
    this.http.get(this.apiUrl).subscribe({
      next: (response: any) => {

        this.data = response
        
      },
      error: (err) => {
        console.error(err);

        this.loading = false
        
        this.poNotification.error("Ocorreu um erro ao carregar as notas fiscais!")
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  ngOnDestroy(): void {
    console.log('Destruindo');
    
  }
}
