import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";




@Injectable({ providedIn:"root"})
export class  incidentreportservice {
  private baseUrl = 'http://localhost:3000/incidentreport';

  constructor(private http: HttpClient ){ }

  getIncidents(){
    return this.http.get(`${this.baseUrl}/list`);
  }

  deleteIncidents(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`);
}}