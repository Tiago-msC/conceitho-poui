import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nfc-grid',
  templateUrl: './nfc-grid.component.html',
  styleUrls: ['./nfc-grid.component.scss'],
})
export class NfcGridComponent implements OnInit {

  private offset: number = 1;
  private limit: number = 13;
  private headers!: HttpHeaders;

  readonly apiUrl: string = environment.apifluentnf + 'nfa0019001';
  readonly columnsApiUrl: string = 'https://my-json-server.typicode.com/Tiago-msC/columns-json-data/columns';

  loading: boolean = false;

  columns = [];

  data = [];

  constructor(
    private http: HttpClient,
    public poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    let params: any = {
      offset: 1,
      limit: this.limit,
    };
    this.loadData(params)
  }

  private loadData(params: { page?: number, search?: string } = { }) {

    this.headers = new HttpHeaders()
    this.headers.append('Range', (this.offset - 1) + '-' + (this.limit - 1))

    this.loading = true;
    forkJoin([
      this.http.get(this.columnsApiUrl),
      this.http.get(this.apiUrl, {headers: this.headers, params: params }),
    ]).subscribe({
      next: (results: any[]) => {
        // Faça algo com os resultados combinados
        this.columns = results[0];

        if (this.data.length > 0) {
          console.log('aqui');
          const newDatas = this.data.concat(results[1])
          this.data = newDatas;
        } else {
          this.data = results[1];
        }
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

  showMore() {
    this.offset = this.offset + this.limit;
    let params: any = { offset: this.offset, limit: this.limit };

    this.loadData(params);
  }
}
