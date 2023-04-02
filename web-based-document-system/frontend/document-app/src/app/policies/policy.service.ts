import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({ providedIn:"root"})
export class  policyservice {
  private baseUrl = 'http://localhost:3000/policies';


  constructor(private http: HttpClient) { }

  getpolicyreports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getpreportID(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  deletepolicyreport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}