import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";



@Injectable({ providedIn: "root" })
export class EquipmentServiceCF {   constructor(private http: HttpClient) {}

userId:any;
formData:any;

  createform(formData: any,id:any) {
    console.log(formData);
    console.log(id);

    const url = `http://localhost:3000/equipmentinventory/${id}`;
    return this.http.get(url);


  }




}


