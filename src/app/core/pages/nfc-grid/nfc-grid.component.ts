import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nfc-grid',
  templateUrl: './nfc-grid.component.html',
  styleUrls: ['./nfc-grid.component.scss'],
})
export class NfcGridComponent implements OnInit, OnDestroy {
  readonly apiUrl: string = environment.apiprotheus + 'nfa0019001';
  readonly columnsApiUrl: string = 'https://my-json-server.typicode.com/Tiago-msC/conceitho-poui/columns';

  loading: boolean = false;

  columns = [];

  data = [];

  constructor(
    private http: HttpClient,
    public poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    this.loading = true;
    forkJoin([
      this.http.get(this.columnsApiUrl),
      this.http.get(this.apiUrl),
    ]).subscribe({
      next: (results: any[]) => {
        // Faça algo com os resultados combinados
        this.columns = results[0];
        this.data = results[1];
      },
      error: (err) => {
        console.error(err);

        this.loading = false;

        this.poNotification.error('Ocorreu um erro ao carregar as notas fiscais!');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    console.log('Destruindo');
  }
}
