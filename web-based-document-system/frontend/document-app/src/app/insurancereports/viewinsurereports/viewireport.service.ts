import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ViewIRService {

  constructor(private http: HttpClient) { }

  viewIreport(id: any) {
    const url = `http://localhost:3000/insurancereport/${id}`;
    return this.http.get(url);
  }
  
}