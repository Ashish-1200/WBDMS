import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {equipmodel} from './equipmentinventory.model'


@Injectable({ providedIn:"root"})
export class  equipinventoryservice {
  private baseUrl = 'http://localhost:3000/equipmentinventory';


  constructor(private http: HttpClient ){ }

  getequip(){
    return this.http.get <equipmodel[]> (`${this.baseUrl}/list`);

  }

  deleteequip(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}