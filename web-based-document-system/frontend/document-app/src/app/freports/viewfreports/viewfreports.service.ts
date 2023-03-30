import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ViewfreportService {

  constructor(private http: HttpClient) { }

  viewfreport(id: any) {
    const url = `http://localhost:3000/financialreport/${id}`;
    return this.http.get(url);
  }
  
}