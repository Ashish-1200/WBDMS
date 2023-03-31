import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({ providedIn:"root"})
export class  insurereportservice {


  private baseUrl = 'http://localhost:3000/insurancereport';


  constructor(private http: HttpClient) { }

  getInsuranceReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  getInsuranceReportById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  deleteInsuranceReport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
