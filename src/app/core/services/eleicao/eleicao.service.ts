import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  private resource = "http://localhost:4200/api/eleicoes";

  constructor(private http: HttpClient) { }

  public getEleicoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.resource}`);
  }
}
