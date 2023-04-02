import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ViewIPService {

  constructor(private http: HttpClient) { }

  viewIPreport(id: any) {
    const url = `http://localhost:3000/intendedproject/${id}`;
    return this.http.get(url);
  }
  
}