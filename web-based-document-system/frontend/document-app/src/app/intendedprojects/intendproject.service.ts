

import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({ providedIn:"root"})
export class  intendservice {
  private baseUrl = 'http://localhost:3000/intendedproject';


  constructor(private http: HttpClient) { }

  getIPreports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getIPreportById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  deleteIPreport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}