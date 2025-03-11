import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosApiService {

  API_URL: string ='https://persons.free.beeceptor.com/todos';
  constructor ( private HttpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.HttpClient.get(this.API_URL).pipe(res=> res);
  }


}
