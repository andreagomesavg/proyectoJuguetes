import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceJuguete, Juguete} from '../common/juguete';

@Injectable({
  providedIn: 'root'
})
export class JugueteService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://api-juguetes.vercel.app/api/v2/juguete/alljuguetes";
  

  constructor() { }
  getJuguetesList (): Observable<InterfaceJuguete>{
    return this.http.get<InterfaceJuguete>(this.URL);
  }

  getJuguete(id: number): Observable<Juguete>{
    return this.http.get<Juguete>("https://api-juguetes.vercel.app/api/v2/juguete/juguete/"+id)
  }
 
}
