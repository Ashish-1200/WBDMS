

  import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {financial} from './freports.model'


@Injectable({ providedIn:"root"})
export class  freportservice {
  private baseUrl = 'http://localhost:3000/financialreport';


  constructor(private http: HttpClient) { }

  getFreports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getFreportById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  deleteFreport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}.