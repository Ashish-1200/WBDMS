import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CreatefreportsService {
  constructor(private http: HttpClient) {}

  mediainfo: any;
  formData: any;

  createform(formData: any, mediainfo: any) {
    const url = "http://localhost:3000/financialreport/create";
    const body = { formData, mediainfo };

    return this.http.post<any>(url, body);
  }
}