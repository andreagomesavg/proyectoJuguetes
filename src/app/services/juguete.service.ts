import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceJuguete} from '../common/juguete';

@Injectable({
  providedIn: 'root'
})
export class JugueteService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://api-juguetes.vercel.app/api/v2/juguete";
  

  constructor() { }
  getJuguetes (page: number): Observable<InterfaceJuguete>{
    return this.http.get<InterfaceJuguete>(this.URL+'/juguetes/?page='+page);
  }
  getJuguete(id:number): Observable<InterfaceJuguete>{
    return this.http.get<InterfaceJuguete>(this.URL+id);
  }
}
