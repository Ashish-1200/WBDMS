import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ViewPolicyService {

  constructor(private http: HttpClient) { }

  viewpolicyreport(id: any) {
    const url = `http://localhost:3000/policies/${id}`;
    return this.http.get(url);
  }
  
}